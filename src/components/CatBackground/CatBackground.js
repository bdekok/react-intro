import styles from "./CatBackground.module.css";

export default function CatBackground({ imageUrl }) {
  const backgroundImage = {
    backgroundImage: `url(${imageUrl})`,
  };

  return <div style={backgroundImage} className={styles.background}></div>;
}
