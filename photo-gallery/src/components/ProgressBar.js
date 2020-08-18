import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = (props) => {
  //   const { url, progress } = useStorage(file);
  const file = props.file;
  const fileFromUseSorage = useStorage(file);
  const url = fileFromUseSorage.url;
  const progress = fileFromUseSorage.progress;
  console.log('file', file);
  const setFileFromProps = props.setFile;

  useEffect(() => {
    url && setFileFromProps(null);
  }, [url, setFileFromProps]);

  return (
    <div
      className="progress-bar"
      style={{
        width: progress + '%',
      }}
    >
      {progress} %
    </div>
  );
};

export default ProgressBar;
