import React, { useState }from 'react';
import './App.css';

function App() {
   const [toggle, setToggle] =useState(true)  

  return (
    <div className="App">
      <button onClick={()=>{setToggle(!toggle)}}>toggle</button>
      <hr />
      <div className="blocks">
        {/* if toggle === true display square */}
      {
        toggle 
        ? <div className="square blue">{toggle.toString()}</div> 
        : null
      }
  
     </div>

    </div>
  );
}

export default App;
