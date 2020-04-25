import React from "react";
import styles from "./Users.module.scss";

const Users = (props) => {
  let change = (text) => {
    props.unfollow(text);
  };
  let userItem = props.users.map((user) => {
    return (
      <div className={styles.usersWrapper}>
        <div key={user.id} className={styles.user}>
          <div className={styles.avatarBlock}>
            <div className={styles.avatarWrapper}>
              <img className={styles.avatar} src={user.photoUrl} alt="img" />
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
              <h3>{user.fullName}</h3>
              <p>{user.status}</p>
            </div>

            <div className={styles.sectionSmall}>
              <p>{user.location.country}</p>
              <p>{user.location.city}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{userItem}</div>;
};

export default Users;
