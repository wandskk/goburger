import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import logo from '../Assets/img/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerRow + ' row'}>
          <div className="col-6 ">
            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="Logo GoBurger" />
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className={styles.nav}>
              <nav>
                <Link to="/">Fazer pedidos</Link>
                <Link to="/pedidos">Pedidos</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
