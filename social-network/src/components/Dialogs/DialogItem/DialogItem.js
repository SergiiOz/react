import React from "react";
import styles from "./DialogItem.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className={styles.dialog + " " + styles.active}>
      <div className={styles.avatarWrapper}>
        <img className={styles.avatar} src={props.photo} alt="img" />
      </div>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

export default DialogItem;
