import React from "react";
import classes from "./AnswerItem.module.css";

const AnswerItem = props => {
  return (
    <li className={classes.AnswerItem}>
      {/* pass property */}
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
