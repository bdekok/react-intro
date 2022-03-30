import styles from "./CatButton.module.css";

export default function CatButton({children}) {
  return <button className={styles.button}>{children}</button>;
}
