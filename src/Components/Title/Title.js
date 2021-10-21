import React from 'react';
import styles from './Title.module.css';

const Title = ({ text }) => {
  return (
    <div className="offset-3 col-6 offset-3">
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
};

export default Title;
