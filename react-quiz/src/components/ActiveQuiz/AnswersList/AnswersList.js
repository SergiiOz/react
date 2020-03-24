import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
  return (
    //   JSX

    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        // answer first - parametr from AnswerItem, {answer} - iterator
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            //by default props.state null - if proprs.state isn't empty then
            //props.state[answer.id] - 'answer' this is iteration
            state={props.state ? props.state[answer.id] : null}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
