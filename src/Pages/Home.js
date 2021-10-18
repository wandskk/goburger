import React from 'react';
import Banner from '../Components/Banner';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <Banner />
      <h1 className={styles.title}>Monte o seu burger:</h1>
    </div>
  );
};

export default Home;
