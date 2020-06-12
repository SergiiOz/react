import React from 'react';
import Profile from './Profile';
// import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    //this props pass withRouter
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    //we get profile info
    profileAPI.getUsersToProfile(userId)
      .then((data) => {
        console.log(data);
        //set info to profile with id in profilePage
        this.props.setUserProfile(data);
      });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} props={this.profile} />
      </div>
    );
  }
}

//create new component, in this component pass props from withRouter
//we can get url data like id
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
