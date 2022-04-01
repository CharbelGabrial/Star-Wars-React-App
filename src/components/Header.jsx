import React from "react";
import { Link } from "react-router-dom";

const Header = ({ active }) => {
  return (
    <div className="Header">
      <Link to="/">StarWars Fans</Link>

      <nav>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Films">
            Films
          </Link>
        </li>
        <li>
          <Link to="/Planets" >
            Planets
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
