import CatBackground from "./components/CatBackground/CatBackground";
import CatInfo from "./components/CatInfo/CatInfo";
import CatButton from "./components/CatButton/CatButton";
import { useState, useEffect } from "react";

function CatApp() {
  const [cats, setCats] = useState([]);
  const [currentCatIndex, setCatIndex] = useState(0);
  const currentCat = cats[currentCatIndex];
  const currentPicture = currentCat?.image?.url;

  useEffect(() => {
    if (currentCat) {
      document.title = currentCat.name;
    }
  }, [currentCat]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.CAT_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCats(response);
      })
      .catch((error) => console.error(error));
  }, []);

  function getNextCat() {
    const isLastCat = currentCatIndex === cats.length - 1;

    if (isLastCat) {
      setCatIndex(0);
    } else {
      setCatIndex(currentCatIndex + 1);
    }
  }

  return (
    <>
      {!!cats.length && (
        <>
          <CatBackground imageUrl={currentPicture} />
          <CatInfo cat={currentCat}>
            <CatButton onClick={getNextCat}>Next Cat</CatButton>
          </CatInfo>
        </>
      )}
    </>
  );
}

export default CatApp;
