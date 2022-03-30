import styles from "./CatInfo.module.css";

export default function CatInfo({ cat, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>{cat.name}</h1>
        <p>{cat.description}</p>
        <hr className={styles.hr} />
        {children}
      </div>
    </div>
  );
}
