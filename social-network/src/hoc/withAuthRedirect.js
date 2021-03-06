import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//get isAuth from state
let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      //check is Auth on server
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  //connect
  let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectAuthRedirectComponent;
  // return RedirectComponent;
};

export default withAuthRedirect;
