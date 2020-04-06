import React, { useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";

function App() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>

      <button
        onClick={() => {
          setToggle2(!toggle2);
        }}
      >
        toggle2
      </button>
      <hr />
      <div className="blocks">
        {/* version 1 */}
        {/* if toggle === true display square */}
        {/* {toggle ? <div className="square blue">{toggle.toString()}</div> : null} */}
        {/* ==================================================== */}
        {/* version 2 */}
        <Transition
          in={toggle}
          timeout={{
            // enter time element show
            enter: 1000,
            //exit time element hide
            exit: 500,
          }}
          //add and remove element 'square' from DOM
          mountOnEnter
          unmountOnExit
          //мы можем отслеживать на каком этапе находится анимация
          //и делать какой то функционал
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => {
            return <div className={`square blue ${state}`}>{state}</div>;
          }}
        </Transition>

        {/* CSSTransition */}
        <CSSTransition
          in={toggle2}
          timeout={1000}
          classNames="orangeSquare"
          unmountOnExit
          mountOnEnter
        >
          <div className={`square orange`}>{toggle2.toString()}</div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
