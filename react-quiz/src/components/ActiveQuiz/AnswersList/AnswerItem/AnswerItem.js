import React from "react";
import classes from "./AnswerItem.module.css";

const AnswerItem = props => {
  const cls = [classes.AnswerItem];

  if (props.state) {
    //add class 'success'or 'error'
    cls.push(classes[props.state]);
  }

  return (
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {/* pass property */}
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
