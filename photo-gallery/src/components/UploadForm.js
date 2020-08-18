import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const types = ['image/jpeg', 'image/png'];

  const changeHandler = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);

    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setErrorMessage(null);
    } else {
      setFile(null);
      setErrorMessage('Please select an image file (png or jpeg)');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {errorMessage && <div className="error">{errorMessage}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
