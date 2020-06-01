import React from 'react';
import { connect } from 'react-redux';
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurentPageAC,
  setTotalUsersCountAC,
  setToggleIsFetchingAC,
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {
  //componentDidMount call once after rendering, then mount data
  componentDidMount() {
    //if in users-reducer,  users empty - then we add users from server
    // if (this.props.users.length === 0) {
    this.props.setToggleIsFetching(true);
    axios
      //page - number of portions items; count - page size (how many items well be returned in response)
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )

      .then((response) => {
        this.props.setToggleIsFetching(false);
        console.log(response.data);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
    // }
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setToggleIsFetching(true);
    axios
      //page - number of portions items; count - page size (how many items well be returned in response)
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setToggleIsFetching(false);
        console.log(response.data.items);
        this.props.setUsers(response.data.items);
      });
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
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    setToggleIsFetching: (isFetching) => {
      dispatch(setToggleIsFetchingAC(isFetching));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
