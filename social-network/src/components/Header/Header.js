import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles['header']}>
      <div className={styles.headerSection}>
        <div className={styles['header__logo']}>
          <img
            src="https://adnas.com/wp-content/uploads/2016/06/supply-chain.png"
            alt="logo social network"
          />
        </div>
        <h3>"Chain of people"</h3>
      </div>
      <div className={styles.authBlock}>
        {props.isAuth ? (
          <div>
            {props.login}-<button onClick={props.setLogout}>Logout</button>
          </div>
        ) : (
          <NavLink to={'/login'}>LogIn</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
