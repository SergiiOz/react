import React, { Component } from 'react';
import './App.css';

import Car from "./components/Car";
// import { render } from 'react-dom';


class App extends Component {

  state = {
    cars: [
      { name: 'Ford Mustang', year: 2018 },
      { name: 'Audi', year: 2017 },
      { name: 'Mazda 3', year: 2010 },
    ],

    pageTitle: "React components",
  }

  changeTitleHandler = (newTitle) => {


    // if we clicked button changed title
    //.setState it's extends from Component
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    // event - native event js
    // target - object of input
    // value - value of input
    // console.log('changed from input', event.target.value);
    this.setState({
      pageTitle: event.target.value
    })
  }


  render() {
    // const cars = this.state.cars;

    const divStyle = {
      'color': 'red',
    }


    return (
      <div className="App" style={{ fontStyle: 'italic', fontSize: '30px' }}>

        <h1 style={divStyle}>
          {/* page title */}
          {this.state.pageTitle}
        </h1>

        {/* input field - we will change title */}
        <input type="text" onChange={this.handleInput} />
        <br />

        <button onClick={this.changeTitleHandler.bind(this, ' changed')}>Change Title!</button>

        {/* use array */}
        {this.state.cars.map((car, index) => {
          return (
            < Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
            />
          )
        })}

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


      </div >

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
