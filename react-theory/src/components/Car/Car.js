import React from "react";
//radium for inline style
// import Radium from 'radium';
import "./Car.css";
//packet for falidation types
import PropTypes from "prop-types";

import withClass from "../hoc/withClass";

// props.childern this is 'item'
// <Car > <p>item</p><Car/>

class Car extends React.Component {
  componentDidMount() {
    //focus on the second element with index 1
    if (this.props.index === 1) {
      this.inputRef.focus();
    }
  }

  render() {
    console.log("Car render");

    // if (Math.random() > 0.7) {
    //   throw new Error("Car random failed");
    // }
    //create array to input c-car (dynamic class)
    const inputClasses = ["c-car__input"];

    //if input isn't empty - border green or red or bold
    if (this.props.name !== "") {
      inputClasses.push("c-car__input--green");
    } else {
      inputClasses.push("c-car__input--red");
    }

    if (this.props.name.length > 4) {
      inputClasses.push("c-car__input--bold");
    }

    //this JSX
    return (
      //we remove <div> with class 'c-car' and wrapp
      //this react fragment wrapper from ../hoc/withClass
      <React.Fragment>
        <h3>Car name: {this.props.name}</h3>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        {/* change name car */}
        <input
          /* add the new atribute doesn't show in HTML  */
          // we can triggering 'focus' on input in DOM
          ref={inputRef => (this.inputRef = inputRef)}
          type="text"
          placeholder="change name car"
          onChange={this.props.onChangeName}
          //default value
          value={this.props.name}
          //we have to pass array and convert into string and join through ' '
          className={inputClasses.join(" ")}
        />
        <br />

        {/*onChangeTitle - we ourselves came up with the name and pass to App   */}
        <button onClick={this.props.onChangeTitle}>
          Click (change title Page to car name)
        </button>
        <br />

        {/* delete car */}
        <button onClick={this.props.onDelete}>Delete Car</button>
      </React.Fragment>
    );
  }
}

//validations types
Car.propTypes = {
  //we write what we expect (type), wrong show in console
  name: PropTypes.string,
  index: PropTypes.number,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onDelete: PropTypes.func
};

//wrapp our component with hoc component
export default withClass(Car, "c-car");

//for work with Radium we need wrap the component Car
// export default Radium(Car);

// version create component
//version 1
// function car() {
//     return (
//         <div>
//             <p>This is car</p>
//         </div>
//     );
// }

//version 2
// const car = () => {
//     return (
//         <div>
//             <p>This is car</p>
//         </div>
//     );
// }

// version 3
// const car = () => (
//     <div>
//         <p>This is car</p>
//         <span>Mustang</span>
//     </div>
// )

// export default car;
