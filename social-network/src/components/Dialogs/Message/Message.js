import React from "react";
import styles from "./Message.module.scss";

//component
const Message = (props) => {
  return <li className={styles.message}>{props.message}</li>;
};

export default Message;
