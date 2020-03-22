import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes["ActiveQuiz__question"]}>
        <span>
          {/* added space ' ' - it's '&nbsp;' */}
          <strong>2.</strong>&nbsp; Как дела?
        </span>
        <small>4 из 12</small>
      </p>

      <AnswersList answers={props.answers} />
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
