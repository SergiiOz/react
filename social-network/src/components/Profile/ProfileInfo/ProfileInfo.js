import React from 'react';
import styles from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={styles['profile__info']}>
      <div className={styles['profile__avatar']}>
        <img
          className={styles.avatar}
          src={props.profile.photos.small}
          alt="profile"
        />
      </div>

      <div className={styles['profile__description']}>
        {props.profile.fullName}
      </div>
    </div>
  );
};

export default ProfileInfo;
