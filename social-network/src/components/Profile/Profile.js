import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={styles["profile__poster"]}>
        <img
          src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="poster"
        />
      </div>

      {/* Profile */}
      <div className={styles["profile__data"]}>
        <div className={styles["profile__avatar"]}>
          <img
            src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
            alt="profile"
          />
        </div>

        <div className={styles["profile__description"]}>Description</div>
      </div>

      {/* Post form */}
      <MyPosts />
    </div>
  );
};

export default Profile;
