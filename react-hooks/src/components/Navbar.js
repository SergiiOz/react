import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">GitHub Поиск</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            Информация
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link">
            Профиль
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
