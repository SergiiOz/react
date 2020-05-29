import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
  setAuthUserData,
  setAuthUserProfile,
} from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    //we get profile info
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
          // this.props.setAuthUserData(
          //   response.data.data.id,
          //   response.data.data.email,
          //   response.data.data.login
          // );
        }

        if (this.props.isAuth) {
          axios
            .get(
              `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`
            )
            .then((response) => {
              console.log(response.data);
              //set info to profile with id in profilePage
              // this.props.setUserProfile(response.data);
            });
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, {
  setAuthUserData,
  setAuthUserProfile,
})(HeaderContainer);
