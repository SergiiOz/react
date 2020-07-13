import React from 'react';
import styles from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles['post__avatar']}>
        <img
          className={styles['avatar']}
          src="https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg"
          alt="avatar"
        />
      </div>
      <p>{props.message}</p>&nbsp;
      <span>LIKE: ({props.likesCount})</span>
    </div>
  );
};

export default Post;
