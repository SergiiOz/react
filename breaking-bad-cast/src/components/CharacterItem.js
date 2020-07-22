import React from 'react';

const CharacterItem = (props) => {
  return (
    <div className="card">
      <div className="card-inner">
        {/* CARD FRONT */}
        <div className="card-front">
          <img src={props.item.img} alt="" />
        </div>

        {/* CARD BACK */}
        <div className="card-back">
          <h1>{props.item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {props.item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {props.item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {props.item.birthday}
            </li>
            <li>
              <strong>Occupation:</strong> {props.item.occupation[0]}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
