import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = (props) => {
  return props.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {props.items.map((item) => {
        return <CharacterItem key={item.char_id} item={item} />;
      })}
    </section>
  );
};

export default CharacterGrid;
