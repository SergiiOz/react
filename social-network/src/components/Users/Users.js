import React from 'react';
import styles from './Users.module.scss';
import userPhoto from './../../assets/images/defaultAvatar.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
// import * as axios from 'axios';
import { usersAPI } from '../../api/api';

const Users = (props) => {
  let userItem = props.users.map((user) => {
    return (
      <div className={styles.usersWrapper} key={user.id}>
        <div className={styles.user}>
          <div className={styles.avatarBlock}>
            <div className={styles.avatarWrapper}>
              {/* if click to this img user - we display user profile info in Profile  */}
              <NavLink to={'/profile/' + user.id}>
                <img
                  className={styles.avatar}
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt="img"
                />
              </NavLink>
            </div>

            {/* buttons */}
            {user.followed ? (
              <button
                //if followingInProgress == true - button disabled when clicked button and send request (not to send 2 times request)
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                onClick={() => {
                  //function change state -button disabled when send request
                  props.toggleFollowInProgress(true, user.id);
                  //axios.delete carried out to api.js in object usersAPI method unfollowUser
                  usersAPI.unfollowUser(user.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.unfollow(user.id);
                    }
                    //function change state -button turned on when come response
                    props.toggleFollowInProgress(false, user.id);
                  });
                  // axios
                  //   .delete(
                  //     `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                  //     {
                  //       //this means that we are logged in
                  //       withCredentials: true,
                  //       headers: {
                  //         //api key we take from account social-network
                  //         'API-KEY': '32f728f4-5522-41fd-a01e-5b6564edf694',
                  //       },
                  //     }
                  //   )
                  //   .then((response) => {
                  //     if (response.data.resultCode === 0) {
                  //       props.unfollow(user.id);
                  //     }
                  //   });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                //if followingInProgress == true - button disabled when clicked button and send request (not to send 2 times request)
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                onClick={() => {
                  //function change state - button disabled when send request
                  props.toggleFollowInProgress(true, user.id);
                  //axios.post carried out to api.js in object usersAPI method followUser
                  usersAPI.followUser(user.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.follow(user.id);
                    }
                    //function change state - button turned on when come response
                    props.toggleFollowInProgress(false, user.id);
                  });
                  // axios
                  //   .post(
                  //     `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                  //     {},
                  //     {
                  //       //this means that we are logged in
                  //       withCredentials: true,
                  //       headers: {
                  //         'API-KEY': '32f728f4-5522-41fd-a01e-5b6564edf694',
                  //       },
                  //     }
                  //   )
                  //   .then((response) => {
                  //     if (response.data.resultCode === 0) {
                  //       props.follow(user.id);
                  //     }
                  //   });
                }}
              >
                Follow
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
  let pagesCount = +Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  //fill the array pages
  for (let numPage = 1; numPage <= pagesCount; numPage++) {
    pages.push(numPage);
  }
  return (
    <div>
      <div>
        <div className={styles.pagination}>
          {pages.map((page, index) => {
            return (
              <span
                key={index}
                className={`${styles.pageNumber} ${
                  props.currentPage === page
                    ? styles.selectedPage
                    : styles.pageNumber
                }`}
                //call onPageChange and pass page
                onClick={() => {
                  props.onPageChange(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>

        <div>pages count ({pagesCount})</div>
      </div>
      {props.isFetching === true ? <Preloader /> : null}
      <div>{userItem}</div>
    </div>
  );
};

export default Users;
