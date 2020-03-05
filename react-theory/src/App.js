import React from 'react';
import './App.css';

import Car from "./components/Car";

function App() {
  const divStyle = {
    'color': 'red',
  }

  return (
    <div className="App" style={{ fontStyle: 'italic', fontSize: '30px' }}>
      <h1 style={divStyle}>
        I have done it :).
      </h1>

      {/* this is props.name props.year */}
      <Car name={'Ford Mustang'} year={2018}>
        {/* this props.children */}
        <p style={{ color: 'blue' }}>Color</p>
      </Car>

      <Car name={'Audi'} year={2017} />

      <Car name={'Mazda 3'} year={2010}>
        <p style={{ color: 'green' }}>Color</p>
      </Car>

    </div >

  );
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
}

export default App;
