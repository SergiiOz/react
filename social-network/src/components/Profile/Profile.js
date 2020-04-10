import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <div className={styles["profile__poster"]}>
        <img
          src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="poster"
        />
      </div>
      <div className={styles["profile__wrapper"]}>
        {/* Profile */}
        <ProfileInfo />

        {/* Post form */}
        <MyPosts state={props.state} />
      </div>
    </div>
  );
};

export default Profile;
