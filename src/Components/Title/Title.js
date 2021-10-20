import React from 'react';
import styles from './Title.module.css';

const H1 = ({ text }) => {
  return (
    <div className="offset-4 col-4 offset-4">
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
};

export default H1;
