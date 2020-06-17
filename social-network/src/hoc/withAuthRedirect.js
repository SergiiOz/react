import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  return RedirectComponent;
};

export default withAuthRedirect;
