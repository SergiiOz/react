import React, { Component } from "react";
import "./App.css";
import Car from "./components/Car/Car";
// import { render } from 'react-dom';
import Counter from "./components/Counter/Counter";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  //initialize state with constructor
  constructor(props) {
    console.log("app constructor");
    super(props);
    this.state = {
      cars: [
        { name: "Ford Mustang", year: 2018 },
        { name: "Audi", year: 2017 },
        { name: "Mazda 3", year: 2010 }
      ],

      pageTitle: "React components",
      showCars: false
    };
  }

  // state = {
  //   cars: [
  //     { name: 'Ford Mustang', year: 2018 },
  //     { name: 'Audi', year: 2017 },
  //     { name: 'Mazda 3', year: 2010 },
  //   ],

  //   pageTitle: "React components",
  //   showCars: false,
  // }

  // if we clicked button changed title
  changeTitleHandler = newTitle => {
    //.setState it's extends from Component
    this.setState({
      pageTitle: newTitle
    });
  };

  // change pageTitle
  handleInput = event => {
    // event - native event js
    // target - object of input
    // value - value of input
    // console.log('changed from input', event.target.value);
    this.setState({
      pageTitle: event.target.value
    });
  };

  changeShowCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  // change name car
  onChangeName(name, index) {
    // find car
    const car = this.state.cars[index];
    //change name
    car.name = name;
    //we can't change current state
    //create the clone array cars
    const cars = [...this.state.cars];
    cars[index] = car;
    //change our array in state
    this.setState({
      cars: cars
    });
  }

  deleteCar(index) {
    //create the clone array cars
    const cars = this.state.cars.concat();
    //delete car
    cars.splice(index, 1);
    //change our array in state
    this.setState({
      cars: cars
    });
  }

  //for test
  UNSAFE_componentWillMount() {
    console.log("App componentWillMount");
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    console.log("App render");
    // const cars = this.state.cars;

    const divStyle = {
      color: "red"
    };

    let ourCars = null;

    if (this.state.showCars === true) {
      ourCars = this.state.cars.map((car, index) => {
        return (
          //error boundary wrap Car ('key' перенесли так как ErrorBoundary корневой)
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              //we pass event - event.target.value from input, and pass index
              onChangeName={event =>
                this.onChangeName(event.target.value, index)
              }
              onChangeTitle={this.changeTitleHandler.bind(this, car.name)} //() => this.changeTitleHandler(car.name)
              onDelete={this.deleteCar.bind(this, index)}
            />
          </ErrorBoundary>
        );
      });
    }

    // this is JSX
    return (
      <div className="App" style={{ fontStyle: "italic", fontSize: "30px" }}>
        <h1 style={divStyle}>
          {/* page title */}
          {this.state.pageTitle}
          {/* if I want to pass the 'title' in index.js (props in App didn't declare) */}
          {/* {this.props.title} */}
        </h1>

        {/* toggler show cars */}
        <button onClick={this.changeShowCarsHandler}>Show Cars Toggler</button>
        <br />

        {/* input field - we will change title */}
        <input
          type="text"
          placeholder="change page title"
          onChange={this.handleInput}
        />
        <br />

        <button onClick={this.changeTitleHandler.bind(this, " changed")}>
          Change page Title to the word "changed"!
        </button>

        <Counter />

        {/* our array */}
        <div
          style={{
            maxWidth: 700,
            margin: "auto",
            marginTop: "20px"
          }}
        >
          {ourCars}
        </div>

        {/* use array */}
        {/* {
          // use if (this.state.showCars === true){ show our array} else {null}
          this.state.showCars
            ? this.state.cars.map((car, index) => {
              return (
                < Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                />
              )
            })
            : null
        } */}

        {/* this is props.name props.year */}
        {/* <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />

        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />

        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[2].name + ' ' + cars[2].year)}
        /> */}
      </div>
    );
  }
}

export default App;

//what is it JSX, how convert (important - when we use jsx we have to import 'REACT' from 'react')
// example:
// <div class=App>
//   <h1>I have done it</h1>
// </div>
//we will write without jsx:

// return (React.createElement(
//   'div',
//   {
//     className: 'App'
//   },
//   React.createElement(
//     'h1',
//     null,
//     'I have done it'
//   )
// )
// )
