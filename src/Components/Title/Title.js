import React from 'react';
import styles from './Title.module.css';

const H1 = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default H1;
