import React from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    quiz: [
      {
        answers: [
          { text: "Ответ 1" },
          { text: "Ответ 2" },
          { text: "Ответ 3" },
          { text: "Ответ 4" }
        ]
      }
    ]
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes["Quiz__wrapper"]}>
          <h1 className={classes["Quiz__title"]}>Ответьте на все вопросы</h1>
          {/* component */}
          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </div>
      </div>
    );
  }
}

export default Quiz;
