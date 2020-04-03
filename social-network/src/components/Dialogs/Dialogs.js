import React from "react";
import styles from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <li className={styles.dialog + " " + styles.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

const Message = props => {
  return <li className={styles.message}>{props.message}</li>;
};

const Dialogs = props => {
  return (
    <div>
      <h2 className={styles.title}>Dialogs</h2>

      <div className={styles.content}>
        <ul className={styles["dialogs-list"]}>
          <DialogItem id="1" name="John" />
          <DialogItem id="2" name="Alex" />
          <DialogItem id="3" name="Serg" />
        </ul>

        <ul className={styles["messages-list"]}>
          <Message message="How are you" />
          <Message message="Hi!!" />
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
