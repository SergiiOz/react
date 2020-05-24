import React from 'react';
import styles from './Users.module.scss';
import userPhoto from './../../assets/images/defaultAvatar.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  debugger;
  let userItem = props.users.map((user) => {
    return (
      <div className={styles.usersWrapper} key={user.id}>
        <div className={styles.user}>
          <div className={styles.avatarBlock}>
            <div className={styles.avatarWrapper}>
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
