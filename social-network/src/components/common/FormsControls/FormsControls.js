import React from 'react';
import styles from './FormsControls.module.scss';

//destructarization input, meta and across rest ...props
export const Textarea = ({ input, meta, ...props }) => {
  // console.log('Input', input);
  console.log('meta', meta);
  //meta pass redux-form
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
