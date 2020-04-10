import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Navbar />

        <div className="app-wrapper__content">
          {/* <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} /> */}

          {/* PROFILE  we use construction with 'render' and arrow function, for pass props to component*/}
          <Route
            path="/profile"
            render={() => (
              <Profile postsData={props.state.profilePage.postsData} />
            )}
          />

          {/* MESSAGES */}
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.state.dialogsPage.dialogsData}
                messagesData={props.state.dialogsPage.messagesData}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
