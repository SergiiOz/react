import React, { useState, useEffect } from 'react';
import * as axios from 'axios';
import Header from './components/Header';
import './App.css';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  const onChangeSearchQuery = (text) => {
    setQuery(text);
  };

  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      .then((result) => {
        console.log(result.data);
        setItems(result.data);
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search onChangeSearchQuery={onChangeSearchQuery} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
