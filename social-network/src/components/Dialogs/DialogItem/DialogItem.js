import React from "react";
import styles from "./DialogItem.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className={styles.dialog + " " + styles.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

export default DialogItem;
