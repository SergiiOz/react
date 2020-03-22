import React from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 2,

        answers: [
          { text: "Черное", id: 1 },
          { text: "Синее", id: 2 },
          { text: "Красное", id: 3 },
          { text: "Желтое", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log("Answer ID: ", answerId);
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes["Quiz__wrapper"]}>
          <h1 className={classes["Quiz__title"]}>Ответьте на все вопросы</h1>
          {/* component */}
          <ActiveQuiz
            //pass question to component ActiveQuiz.js
            question={this.state.quiz[0].question}
            answers={this.state.quiz[0].answers}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
