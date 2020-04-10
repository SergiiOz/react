import React from "react";
import styles from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div className={styles["profile__info"]}>
      <div className={styles["profile__avatar"]}>
        <img
          className={styles.avatar}
          src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
          alt="profile"
        />
      </div>

      <div className={styles["profile__description"]}>Description</div>
    </div>
  );
};

export default ProfileInfo;
