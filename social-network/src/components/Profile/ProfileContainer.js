import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    //this props pass withRouter
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    //we get profile info
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)

      .then((response) => {
        console.log(response.data);
        //set info to profile with id 2 in profilePage
        this.props.setUserProfile(response.data);
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
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
