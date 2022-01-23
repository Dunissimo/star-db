import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <h1>StarDB</h1>
        <ul>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Planets</a>
          </li>
          <li>
            <a href="#">Starships</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
