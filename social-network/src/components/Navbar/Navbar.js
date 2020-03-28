import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#profile">
            Profile
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#messages">
            Messages
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#news">
            News
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#music">
            Music
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#setting">
            Setting
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
