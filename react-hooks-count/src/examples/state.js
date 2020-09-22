import React, { useState } from 'react';

function State() {
  const [count, setCount] = useState(0);

  const [state, setState] = useState({
    title: 'The Counter',
    date: Date.now(),
  });

  const addCount = () => {
    //setCount(count + 1)
    //setCount(count + 1)
    //result was only one time added 1
    //for increase on 2 point, will need to create callback and pass previous counter
    setCount((prevCounter) => {
      return prevCounter + 1;
    });

    setCount((prevCounter) => {
      return prevCounter + 1;
    });
  };

  const removeCount = () => {
    setCount(count - 1);
  };

  const changeTitle = () => {
    return setState((prev) => {
      return {
        ...prev,
        title: 'New Text',
      };
    });
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button className="btn btn-success" onClick={addCount}>
        Add
      </button>
      <button className="btn btn-danger" onClick={removeCount}>
        Remove
      </button>
      <button className="btn btn-primary" onClick={changeTitle}>
        Change Title
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default State;
