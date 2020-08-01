import React from 'react';
import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

const App = () => {
  return (
    <div className="App">
      <Title />
      <UploadForm />
    </div>
  );
};

export default App;
