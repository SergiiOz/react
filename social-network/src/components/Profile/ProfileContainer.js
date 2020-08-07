import React from 'react';
import Profile from './Profile';
// import * as axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  // setUserProfile,
  setUserThunkCreator,
  getUserSatusThunkCreator,
  updateUserSatusThunkCreator,
} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
// import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    //this props pass withRouter
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 7817;
      userId = this.props.authorizedUserId;
    }
    //we get profile info
    this.props.getUserProfile(userId);
    //--was step bef
    // profileAPI.getUsersToProfile(userId).then((data) => {
    //   console.log(data);
    //   //set info to profile with id in profilePage
    //   this.props.setUserProfile(data);
    // });

    this.props.getUserStatus(userId);
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          props={this.props.profile}
          status={this.props.status}
          updateUserStatus={this.props.updateUserStatus}
        />
      </div>
    );
  }
}

// -- moved to compose()
//hoc 'withAuthRedirect' wrapp ProfileContainer-> make redirect to Login page if user doesn't auth
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

//// -- moved to hoc/withAuthRedirect
// let mapStateToPropsForRedirect = (state) => {
//   return {
//     isAuth: state.auth.isAuth,
//   };
// };

// -- moved to compose
// let AuthRedirectComponentWithSecondWrapp = connect(mapStateToPropsForRedirect)(
//   AuthRedirectComponent
// );

//=====================================================
//create new component, in this component pass props from withRouter
//we can get url data like id
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => {
      dispatch(setUserThunkCreator(userId));
    },
    getUserStatus: (userId) => {
      dispatch(getUserSatusThunkCreator(userId));
    },
    updateUserStatus: (status) => {
      dispatch(updateUserSatusThunkCreator(status));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(WithUrlDataContainerComponent);

// export default ProfileContainer;
