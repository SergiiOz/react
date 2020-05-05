import React from 'react';
import styles from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from './../../assets/images/defaultAvatar.png';

const Users = (props) => {
  //if in users-reducer,  users empty - then we add users from server
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        console.log(response.data.items);
        props.setUsers(response.data.items);
      });
  }

  // props.setUsers([
  //   {
  //     id: 1,
  //     followed: true,
  //     fullName: 'Michel',
  //     status: "I'm a developer",
  //     photoUrl:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR766YSejBCsUF2jottA5FXFTa_TQFmJN1FQdjuy07TQK293wSo&usqp=CAU',
  //     location: {
  //       country: 'Poland',
  //       city: 'Helm',
  //     },
  //   },
  //   {
  //     id: 2,
  //     followed: false,
  //     fullName: 'Sergii',
  //     status: "I'm a front-end developer",
  //     photoUrl:
  //       'https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg',

  //     location: {
  //       country: 'Ukraine',
  //       city: 'Rivne',
  //     },
  //   },
  //   {
  //     id: 3,
  //     followed: true,
  //     fullName: 'Alex',
  //     status: "I'm a beck-end developer",
  //     photoUrl:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR766YSejBCsUF2jottA5FXFTa_TQFmJN1FQdjuy07TQK293wSo&usqp=CAU',

  //     location: {
  //       country: 'USA',
  //       city: 'California',
  //     },
  //   },
  // ]);
  // }

  let userItem = props.users.map((user) => {
    return (
      <div className={styles.usersWrapper} key={user.id}>
        <div className={styles.user}>
          <div className={styles.avatarBlock}>
            <div className={styles.avatarWrapper}>
              <img
                className={styles.avatar}
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt="img"
              />
            </div>

            {/* buttons */}
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
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
  return <div>{userItem}</div>;
};

export default Users;
