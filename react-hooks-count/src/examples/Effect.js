import React, { useState, useEffect } from 'react';

function Effect() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    console.log('Type changed', type);
  }, [type]);

  //request to jsonplaceholder
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  const mouseMoveHandler = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  //position mouse
  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
  }, []);

  const onSetUsers = () => {
    setType('users');
  };

  const onSetTodos = () => {
    setType('todos');
  };

  // const onSetPost = () => {
  //   setType('post')
  // }
  return (
    <div>
      <h1>Resurs: {type}</h1>
      <button className="btn btn-primary" onClick={onSetUsers}>
        users
      </button>
      <button className="btn btn-success" onClick={onSetTodos}>
        todos
      </button>
      <button className="btn btn-danger" onClick={() => setType('posts')}>
        posts
      </button>

      <pre>{JSON.stringify(position, null, 2)}</pre>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Effect;
