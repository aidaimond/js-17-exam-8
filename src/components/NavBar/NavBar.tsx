import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-secondary bg-opacity-75">
      <div className="container-fluid">
        <span className="navbar-brand">Quotes Central</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Quotes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add-quote" className="nav-link">
                Submit New Quote
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;