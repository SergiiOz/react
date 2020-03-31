import React from "react";
import styles from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div>
      <h2 className={styles.title}>Dialogs</h2>

      <div className={styles.content}>
        <ul className={styles["dialogs-list"]}>
          <li className={styles.dialog + " " + styles.active}>
            <NavLink to="/dialogs/1">John</NavLink>
          </li>
          <li className={styles.dialog}>
            <NavLink to="/dialogs/2">Alex</NavLink>
          </li>
          <li className={styles.dialog}>
            <NavLink to="/dialogs/3">Serg</NavLink>
          </li>
        </ul>
        <ul className={styles["messages-list"]}>
          <li className={styles.message}>Hi</li>
          <li className={styles.message}>How are you?</li>
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
