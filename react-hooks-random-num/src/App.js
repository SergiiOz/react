import React, { useState, useEffect } from "react";
import "./App.css";
import ItemApp from "./components/ItemApp";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //random number 0 - 10
      const randomNumber = Math.round(Math.random() * 10);
      //change count
      setCount(randomNumber);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      {/* Child component */}
      <ItemApp parentCount={count} />
    </div>
  );
}

export default App;
