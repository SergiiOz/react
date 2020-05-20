import React from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersApi extends React.Component {
  //componentDidMount call once after rendering, then mount data
  componentDidMount() {
    //if in users-reducer,  users empty - then we add users from server
    // if (this.props.users.length === 0) {
    axios
      //page - number of portions items; count - page size (how many items well be returned in response)
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        console.log(response.data);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
    // }
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      //page - number of portions items; count - page size (how many items well be returned in response)
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
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
          totalUsersCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
        />
      </div>
    );
  }
}

export default UsersApi;
