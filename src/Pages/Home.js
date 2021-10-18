import React from 'react';
import styles from './Home.module.css';
import Banner from '../Components/Banner';
import FormBurger from '../Components/Form/FormBurger';

const Home = () => {
  return (
    <div>
      <Banner />
      <h1 className={styles.title}>Monte o seu burger:</h1>
      <FormBurger />
    </div>
  );
};

export default Home;
