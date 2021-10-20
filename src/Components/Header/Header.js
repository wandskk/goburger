import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { Animated } from 'react-animated-css';

import logo from '../../Assets/img/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Animated
          animationIn="fadeIn"
          animationOut="slideOutLeft"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <div className={styles.headerRow + ' row'}>
            <div className="col-6 slideInRight">
              <div className={styles.logo}>
                <Link to="/">
                  <Animated
                    animationIn="slideInLeft"
                    animationOut="slideOutLeft"
                    isVisible={true}
                  >
                    <img src={logo} alt="Logo GoBurger" />
                  </Animated>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.nav}>
                <nav>
                  <Animated
                    animationIn="slideInRight"
                    animationOut="slideOutRight"
                    isVisible={true}
                  >
                    <Link to="/">Fazer pedidos</Link>
                    <Link to="/pedidos">Pedidos</Link>
                  </Animated>
                </nav>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </header>
  );
};

export default Header;
