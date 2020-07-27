import React from 'react';
import styles from './FormsControls.module.scss';

//destructig input, meta and across rest ...props
export const TextareaCustom = ({ input, meta, ...props }) => {
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

//destructig input, meta and across rest ...props
export const InputCustom = ({ input, meta, ...props }) => {
  // console.log('Input', input);
  console.log('meta', meta);
  //meta pass redux-form
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
