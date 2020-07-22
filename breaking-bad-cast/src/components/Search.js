import React, { useState } from 'react';

const Search = (props) => {
  const [text, setText] = useState('');

  const changeTextSearch = (event) => {
    setText(event.target.value);
    props.onChangeSearchQuery(text);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={changeTextSearch}
        />
      </form>
    </section>
  );
};

export default Search;
