import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
  return (
    //   JSX

    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        // answer first - parametr from AnswerItem, {answer} - iterator
        return <AnswerItem key={index} answer={answer} />;
      })}
    </ul>
  );
};

export default AnswersList;
