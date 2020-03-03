import React from 'react';
import './App.css';

function App() {
  const divStyle = {
    'color': 'red',
  }

  return (
    <div className="App" style={{ fontStyle: 'italic', fontSize: '30px' }}>
      <h1 style={divStyle}>
        I have done it :).
      </h1>
    </div >

  );
  //what is it JSX, how convert (important - when we use jsx we have to import 'REACT' from 'react')
  // return (React.createElement(
  //   'div',
  //   {
  //     className: 'App'
  //   },
  //   React.createElement(
  //     'h1',
  //     null,
  //     'hello world'
  //   )
  // )
  // )
}

export default App;
