import styles from "./hjertekurv-loader.module.css";

export default function HjertekurvLoader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.heartLeftContainer}>
        <div className={styles.heartLeft}></div>
      </div>
      <div className={styles.loader6}>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
      </div>
      <div className={styles.heartRightContainer}>
        <div className={styles.heartRight}></div>
      </div>
    </div>
  );
}
