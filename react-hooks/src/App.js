import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container pt-4">
        <Alert alert={{ text: "Test Alert", type: "success" }} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
