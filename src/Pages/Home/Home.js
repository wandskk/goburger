import React from 'react';
import FormBurger from '../../Components/Form/FormBurger';
import Banner from '../../Components/Banner/Banner';
import Title from '../../Components/Title/Title.js';
import { Animated } from 'react-animated-css';
import Message from '../../Components/Message/Message';

const Home = () => {
  const [msg, setMsg] = React.useState(null);
  return (
    <div className="content">
      {msg !== null && (
        <Message msg={msg} setMsg={setMsg} className={msg.className} />
      )}
      <Animated
        animationIn="fadeIn"
        animationOut="slideOutLeft"
        animationInDuration={2500}
        animationOutDuration={2500}
        isVisible={true}
      >
        <Banner />

        <Animated
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          animationInDuration={2500}
          animationOutDuration={2500}
          isVisible={true}
        >
          <Title text="Monte o seu burger:" />
        </Animated>
        <Animated
          animationIn="slideInRight"
          animationOut="slideOutLeft"
          animationInDuration={2500}
          animationOutDuration={2500}
          isVisible={true}
        >
          <FormBurger msg={msg} setMsg={setMsg} />
        </Animated>
      </Animated>
    </div>
  );
};

export default Home;
