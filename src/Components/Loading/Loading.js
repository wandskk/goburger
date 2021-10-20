import React from 'react';
import styles from './Loading.module.css';
import loading from '../../Assets/img/loading.gif';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
