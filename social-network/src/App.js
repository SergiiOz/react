import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />

      <Navbar state={props.state.sideBar} />

      <div className="app-wrapper__content">
        {/* <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} /> */}

        {/* PROFILE  we use construction with 'render' and arrow function, for pass props to component*/}
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />

        {/* MESSAGES */}
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              state={props.state.dialogsPage}
              updateNewMessageText={props.updateNewMessageText}
              addMessage={props.addMessage}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
