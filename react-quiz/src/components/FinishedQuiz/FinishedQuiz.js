import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = () => {
  return (
    <div className={classes.FinishedQuiz}>
      <h2>FINISHED</h2>
      <div>
        <ul className={classes["FinishedQuiz__list"]}>
          <li className={classes["FinishedQuiz__item"]}>
            <strong>1. </strong>
            Some question
            <i className={`fa fa-times ${classes["FinishedQuiz--error"]}`} />
          </li>

          <li className={classes["FinishedQuiz__item"]}>
            <strong>2. </strong>
            Some question
            <i className={"fa fa-check " + classes["FinishedQuiz--success"]} />
          </li>
        </ul>

        <p>Правильно 4 из 10</p>
        <button>Повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
