import React from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const favoriteFriends = props.state.friends.map((friend) => {
    return (
      <div key={friend.id}>
        <div className={styles["avatar__block"]}>
          <img className={styles.avatar} src={friend.photo} alt="img" />
        </div>
        {friend.name}
      </div>
    );
  });

  return (
    <nav className={styles.nav}>
      <div className={styles["nav__inner"]}>
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
      </div>

      {/* SIDEBAR */}
      <div className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Favorit friends</h3>
        <div className={styles.sidebarList}>{favoriteFriends}</div>
      </div>
    </nav>
  );
};

export default Navbar;
