import React from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends React.Component {
  state = {
    isFinished: true,
    activeQuestion: 0,
    answerState: null, //{ [id]: 'success' or 'error'} (green or red)
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
    //if we answer right, we just return, that don't enter to function
    if (this.state.answerState) {
      //in object has one value
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "AnswerItem--success") {
        return;
      }
    }

    //get question from state
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      //change state answerState
      this.setState({
        answerState: { [answerId]: "AnswerItem--success" }
      });
      console.log(this.state.answerState);

      const timeout = window.setTimeout(() => {
        //check question finished or no
        if (this.isQiuzFinished()) {
          // console.log("Finished");
          this.setState({
            isFinished: true
          });
        } else {
          //if all right we cross to next question
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            //after right answer, clear answerState
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerId]: "AnswerItem--error" }
      });
    }
  };

  isQiuzFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes["Quiz__wrapper"]}>
          <h1 className={classes["Quiz__title"]}>Ответьте на все вопросы</h1>

          {/* if 'isFinished'  === true - we show message 'Finished'*/}
          {this.state.isFinished ? (
            // <h1>Finished</h1>
            <FinishedQuiz />
          ) : (
            //component
            <ActiveQuiz
              //pass property to component ActiveQuiz.js
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              onAnswerClick={this.onAnswerClickHandler}
              questionNumber={this.state.activeQuestion + 1}
              quizLength={this.state.quiz.length}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
