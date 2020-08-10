import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
// import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { initializeAppThunkCreator } from './redux/app-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    //we get profile info, send request auth.me
    this.props.initializeApp();
  }
  render() {
    //if initialized false display text below
    if (!this.props.initialized) {
      return <div>Please wait, Loading ...</div>;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />

        {/* <Navbar state={props.state.sideBar} /> */}
        <Navbar />

        <div className="app-wrapper__content">
          {/* <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} /> */}

          {/* PROFILE  we use construction with 'render' and arrow function, for pass props to component*/}
          <Route
            //get params userId
            path="/profile/:userId?"
            render={() => (
              <ProfileContainer
              // store={props.store}
              // state={props.state.profilePage}
              // dispatch={props.dispatch}
              // addPost={props.addPost}
              // updateNewPostText={props.updateNewPostText}
              />
            )}
          />

          {/* MESSAGES */}
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer
              // store={props.store}
              // state={props.state.dialogsPage}
              // dispatch={props.dispatch}
              // updateNewMessageText={props.updateNewMessageText}
              // addMessage={props.addMessage}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.appPage.initialized,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    //authorized
    initializeApp: () => {
      dispatch(initializeAppThunkCreator());
    },
  };
};

export default compose(
  withRouter, //withRouter used for better work route
  connect(mapStateToProps, mapDispatchToProps)
)(App);
