import React from 'react';
import { Animated } from 'react-animated-css';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="slideOutLeft"
      animationInDuration={2000}
      animationOutDuration={2000}
      isVisible={true}
    >
      <section className={styles.banner}>
        <Animated
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          animationInDuration={2000}
          animationOutDuration={2000}
          isVisible={true}
        >
          <div className={styles.title}>Make your burger</div>
        </Animated>
      </section>
    </Animated>
  );
};

export default Banner;
