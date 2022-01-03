import styles from "./slider.module.css";
import Script from "next/script";
function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_active}>
        <img src="cover-face" alt="slider1" />
        <div className={styles.text}>پروفسور سمیعی</div>
        <img src="sheibani.jpg" alt="slider2" />
        <div className={styles.text}>آقای شیبانی</div>
        <img src="sohrabi.jpg" alt="slider3" />
        <div className={styles.text}>آقای سهرابی</div>
        <a href="#" className={styles.prev}>
          &#10094;
        </a>
        <a href="#" className={styles.next}>
          &#10095;
        </a>
      </div>
      <div className={styles.dots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <Script src="./sliderJavascripts.js"></Script>
    </div>
  );
}
export default Slider;
