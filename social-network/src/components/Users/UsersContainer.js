import React from 'react';
import { connect } from 'react-redux';
import {
  // followAC,
  // unfollowAC,
  // setUsersAC,
  setCurentPageAC,
  // setTotalUsersCountAC,
  // setToggleIsFetchingAC,
  // toggleFollowInProgressAC,
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator,
} from '../../redux/users-reducer';
// import * as axios from 'axios';
import Users from './Users';
// import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  //componentDidMount call once after rendering, then mount data
  componentDidMount() {
    // -- third step after refactoring --
    this.props.getUsers(this.props.currentPage, this.props.pageSize);

    // -- was second step and then refactoring --
    // this.props.setToggleIsFetching(true);
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((data) => {
    //     this.props.setToggleIsFetching(false);
    //     console.log(data);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });

    // -- was first step and then refactoring --
    //if in users-reducer,  users empty - then we add users from server
    // if (this.props.users.length === 0) {
    // axios
    //page - number of portions items; count - page size (how many items well be returned in response)
    // .get(
    //   `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    //   {
    //     withCredentials: true,
    //   }
    // );
    // }
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    this.props.getUsers(pageNumber, this.props.pageSize);

    // -- was second step and then refactoring --
    // this.props.setToggleIsFetching(true);
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
    //   this.props.setToggleIsFetching(false);
    //   console.log(data.items);
    //   this.props.setUsers(data.items);
    // });

    // -- was first step and then refactoring --
    // axios
    //   //page - number of portions items; count - page size (how many items well be returned in response)
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    //   )
  };

  render() {
    //'react' draws users
    return (
      <div>
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChange={this.onPageChange}
          isFetching={this.props.isFetching}
          followingInProgress={this.props.followingInProgress}
          toggleFollowInProgress={this.props.toggleFollowInProgress}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // follow: (userId) => {
    //   dispatch(followAC(userId));
    // },
    // unfollow: (userId) => {
    //   dispatch(unfollowAC(userId));
    // },
    // setUsers: (users) => {
    //   dispatch(setUsersAC(users));
    // },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurentPageAC(pageNumber));
    },
    // setTotalUsersCount: (totalCount) => {
    //   dispatch(setTotalUsersCountAC(totalCount));
    // },
    // setToggleIsFetching: (isFetching) => {
    //   dispatch(setToggleIsFetchingAC(isFetching));
    // },
    // toggleFollowInProgress: (isFetching, userId) => {
    //   dispatch(toggleFollowInProgressAC(isFetching, userId));
    // },
    //afrer refactoring, used thunk
    getUsers: (currentPage, pageSize) => {
      dispatch(getUsersThunkCreator(currentPage, pageSize));
    },
    follow: (userId) => {
      dispatch(followThunkCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unFollowThunkCreator(userId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
