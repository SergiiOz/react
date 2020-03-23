import React from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 2,
        id: 1,

        answers: [
          { text: "Черное", id: 1 },
          { text: "Синее", id: 2 },
          { text: "Красное", id: 3 },
          { text: "Желтое", id: 4 }
        ]
      },
      {
        question: "В каком году Америка получила независимость?",
        rightAnswerId: 3,
        id: 2,

        answers: [
          { text: "2020", id: 1 },
          { text: "1550", id: 2 },
          { text: "1776", id: 3 },
          { text: "1990", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log("Answer ID: ", answerId);

    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    });
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes["Quiz__wrapper"]}>
          <h1 className={classes["Quiz__title"]}>Ответьте на все вопросы</h1>
          {/* component */}
          <ActiveQuiz
            //pass question to component ActiveQuiz.js
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            questionNumber={this.state.activeQuestion + 1}
            quizLength={this.state.quiz.length}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
