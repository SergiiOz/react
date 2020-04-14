import React from "react";
import styles from "./Message.module.scss";

//component
const Message = (props) => {
  return (
    <li className={styles.message}>
      <span>{props.message}</span>
    </li>
  );
};

export default Message;
