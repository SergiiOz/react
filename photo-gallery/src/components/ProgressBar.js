import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  // const file = props.file;
  // const fileFromUseSorage = useStorage(file);
  // const url = fileFromUseSorage.url;
  // const progress = fileFromUseSorage.progress;
  // const setFileFromProps = props.setFile;
  const { url, progress } = useStorage(file);
  console.log(url, progress);

  useEffect(() => {
    url && setFile(null);
  }, [url, setFile]);

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
