import React from "react";
import styles from "./Gallery.module.css";

const Accordions: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img1}></div>
      <div className={styles.img2}></div>
      <div className={styles.img3}></div>
      <div className={styles.img4}></div>
      <div className={styles.img5}></div>
    </div>
  );
};

export default Accordions;
