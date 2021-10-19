import React from 'react';
import styles from './Home.module.css';
import FormBurger from '../../Components/Form/FormBurger';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
  return (
    <div className="content">
      <Banner />
      <h1 className={styles.title}>Monte o seu burger:</h1>
      <FormBurger />
    </div>
  );
};

export default Home;
