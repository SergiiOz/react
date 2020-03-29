import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__list"]}>
        <li className={styles["nav__item"]}>
          <a className={styles["nav__link"]} href="#profile">
            Profile
          </a>
        </li>
        <li className={styles["nav__item"]}>
          <a className={styles["nav__link"]} href="#messages">
            Messages
          </a>
        </li>
        <li className={styles["nav__item"]}>
          <a className={styles["nav__link"]} href="#news">
            News
          </a>
        </li>
        <li className={styles["nav__item"]}>
          <a className={styles["nav__link"]} href="#music">
            Music
          </a>
        </li>
        <li className={styles["nav__item"]}>
          <a className={styles["nav__link"]} href="#setting">
            Setting
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
