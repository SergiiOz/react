import React from "react";

export default class ErrorBounday extends React.Component {
  state = {
    hasError: false
  };
  //method catch error
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    //если ошибка есть показываем ошибку
    if (this.state.hasError === true) {
      return <h1 style={{ color: "red" }}>Something went wrong!!!</h1>;
    }
    //если ошибки нет, то сам компонент
    return this.props.children;
  }
}
