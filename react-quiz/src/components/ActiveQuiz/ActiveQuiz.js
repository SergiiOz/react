import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes["ActiveQuiz__question"]}>
        <span>
          {/* added space ' ' - it's '&nbsp;' */}
          <strong>{props.questionNumber}.</strong>&nbsp;
          {/* dispaly question from Quiz.js */}
          {props.question}
        </span>
        <small>
          {/* active */}
          {props.questionNumber} из&nbsp;
          {/* total questions in the quiz */}
          {props.quizLength}
        </small>
      </p>

      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
      {/* <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul> */}
    </div>
  );
};

export default ActiveQuiz;
