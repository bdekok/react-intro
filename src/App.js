import cats from "./cats.json";
import CatBackground from "./components/CatBackground/CatBackground";
import CatInfo from "./components/CatInfo/CatInfo";
import CatButton from "./components/CatButton/CatButton";
import { useState } from "react";

function CatApp() {
  const [currentCatIndex, setCatIndex] = useState(0);
  const currentCat = cats[currentCatIndex];
  const currentPicture = currentCat.image.url;

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
      <CatBackground imageUrl={currentPicture} />
      <CatInfo cat={currentCat}>
        <CatButton onClick={getNextCat}>Next Cat</CatButton>
      </CatInfo>
    </>
  );
}

export default CatApp;
