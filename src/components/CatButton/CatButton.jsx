import styles from "./CatButton.module.css";

export default function CatButton({children, onClick}) {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
}
