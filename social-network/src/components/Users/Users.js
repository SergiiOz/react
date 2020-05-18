import React from 'react';
import styles from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from './../../assets/images/defaultAvatar.png';

class Users extends React.Component {
  //componentDidMount call once after rendering, then mount data
  componentDidMount() {
    //if in users-reducer,  users empty - then we add users from server
    // if (this.props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        console.log(response.data.items);
        this.props.setUsers(response.data.items);
      });
    // }
  }

  render() {
    let userItem = this.props.users.map((user) => {
      return (
        <div className={styles.usersWrapper} key={user.id}>
          <div className={styles.user}>
            <div className={styles.avatarBlock}>
              <div className={styles.avatarWrapper}>
                <img
                  className={styles.avatar}
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt="img"
                />
              </div>

              {/* buttons */}
              {user.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(user.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(user.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.sectionBig}>
                <h3>{user.name}</h3>
                <p>{user.status}</p>
              </div>

              <div className={styles.sectionSmall}>
                <p>Country</p>
                <p>{user.id}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    //calculate the number of pages
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    //fill the array pages
    for (let numPage = 1; numPage <= pagesCount; numPage++) {
      pages.push(numPage);
    }
    //'react' draws users
    return (
      <div>
        <div>
          <div>
            {pages.map((page) => {
              return (
                <span
                  className={
                    this.props.currentPage === page ? styles.selectedPage : ''
                  }
                >
                  {page}
                </span>
              );
            })}
          </div>

          <div>pages count ({pagesCount})</div>
        </div>
        <div>{userItem}</div>
      </div>
    );
  }
}

export default Users;
