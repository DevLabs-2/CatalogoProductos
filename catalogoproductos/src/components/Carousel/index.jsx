import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';
import Productos from '../../products.js';

const Carrousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);

  const showSlides = (n) => {
    if (n > slidesRef.current.length) { setSlideIndex(1); }
    if (n < 1) { setSlideIndex(slidesRef.current.length); }

    slidesRef.current.forEach((slide, i) => {
      slide.style.display = (i === slideIndex - 1) ? "block" : "none";
    });

    dotsRef.current.forEach((dot, i) => {
      dot.className = dot.className.replace(" active", "");
      if (i === slideIndex - 1) {
        dot.className += " active";
      }
    });
  };

  useEffect(() => {
      showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
      setSlideIndex((prevIndex) => prevIndex + n);
  };

  return (
    <div className={styles.slideshowContainer}>
            <a className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</a>
      <div ref={el => slidesRef.current[0] = el} className={[styles.mySlides, styles.fade]}>
        <img  src={Productos[0].image} alt={Productos[0].name}/>
      </div>

      <div ref={el => slidesRef.current[1] = el} className={[styles.mySlides, styles.fade]}>
        <img src={Productos[1].image} alt={Productos[1].name}/>
      </div>

      <div ref={el => slidesRef.current[2] = el} className={[styles.mySlides, styles.fade]}>
        <img src={Productos[2].image} alt={Productos[2].name}/>
      </div>


      <a className={styles.next} onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
  );
};

export default Carrousel;