import React from 'react';
import Profile from './Profile';
// import * as axios from 'axios';
import { connect } from 'react-redux';
import {
  // setUserProfile,
  setUserThunkCreator,
} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
// import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    //this props pass withRouter
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    //we get profile info
    this.props.setUserProfile(userId);
    //--was step bef
    // profileAPI.getUsersToProfile(userId).then((data) => {
    //   console.log(data);
    //   //set info to profile with id in profilePage
    //   this.props.setUserProfile(data);
    // });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} props={this.profile} />
      </div>
    );
  }
}

//hoc 'withAuthRedirect' wrapp ProfileContainer-> make redirect to Login page if user doesn't auth
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

//// -- moved to hoc/withAuthRedirect
// let mapStateToPropsForRedirect = (state) => {
//   return {
//     isAuth: state.auth.isAuth,
//   };
// };

// let AuthRedirectComponentWithSecondWrapp = connect(mapStateToPropsForRedirect)(
//   AuthRedirectComponent
// );

//=====================================================
//create new component, in this component pass props from withRouter
//we can get url data like id
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (userId) => {
      dispatch(setUserThunkCreator(userId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
