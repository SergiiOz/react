import React from 'react';
import loader from '../assets/img/spinner.gif';

const Preloader = () => {
  return (
    <img
      src={loader}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading"
    />
  );
};

export default Preloader;
