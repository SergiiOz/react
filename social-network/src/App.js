import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="App-wrapper">
      <Header />

      <Navbar />

      <Main />
    </div>
  );
};

export default App;
