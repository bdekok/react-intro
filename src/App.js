import cats from "./cats.json";
import CatBackground from "./components/CatBackground/CatBackground";
import CatInfo from "./components/CatInfo/CatInfo";
import CatButton from "./components/CatButton/CatButton";

function CatApp() {
  const currentCat = cats[0];
  const currentPicture = currentCat.image.url;

  return (
    <>
      <CatBackground imageUrl={currentPicture} />
      <CatInfo cat={currentCat}>
        <CatButton>Next Cat</CatButton>
      </CatInfo>
    </>
  );
}

export default CatApp;
