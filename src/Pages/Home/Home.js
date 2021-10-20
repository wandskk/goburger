import React from 'react';
import FormBurger from '../../Components/Form/FormBurger';
import Banner from '../../Components/Banner/Banner';
import Title from '../../Components/Title/Title.js';

const Home = () => {
  return (
    <div className="content">
      <Banner />
      <Title text="Monte o seu burger:" />
      <FormBurger />
    </div>
  );
};

export default Home;
