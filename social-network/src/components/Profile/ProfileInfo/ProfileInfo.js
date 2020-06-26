import React from 'react';
import styles from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  //if profile === null of undefined
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
        <h3>{props.profile.fullName}</h3>
        <p>{`About me: ${props.profile.aboutMe}`}</p>
        <div>
          <p>{`GitHub: ${props.profile.contacts.github}`}</p>
          <p>{`Twitter: ${props.profile.contacts.twitter}`}</p>

          <p>{props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</p>
        </div>
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
