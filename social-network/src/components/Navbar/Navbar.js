import React from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__list"]}>
        <li className={styles["nav__item"]}>
          <NavLink
            className={styles["nav__link"]}
            activeClassName={styles["nav__link--active"]}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={styles["nav__item"]}>
          <NavLink
            className={styles["nav__link"]}
            activeClassName={styles["nav__link--active"]}
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li className={styles["nav__item"]}>
          <NavLink className={styles["nav__link"]} to="/news">
            News
          </NavLink>
        </li>
        <li className={styles["nav__item"]}>
          <NavLink className={styles["nav__link"]} to="/music">
            Music
          </NavLink>
        </li>
        <li className={styles["nav__item"]}>
          <NavLink className={styles["nav__link"]} to="/settings">
            Setting
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
