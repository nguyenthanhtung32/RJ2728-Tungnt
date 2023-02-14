import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./ImageViewer.module.css";

const ImageViewer: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={styles.img}
          src="https://wallpaperaccess.com/full/2637581.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.img}
          src="https://wallpaperaccess.com/full/2637591.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.img}
          src="https://wallpaperaccess.com/full/917648.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.img}
          src="https://wallpaperaccess.com/full/2381677.jpg"
          alt="Four slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.img}
          src="https://wallpaperaccess.com/full/2637588.jpg"
          alt="Five slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageViewer;
