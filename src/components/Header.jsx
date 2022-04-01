import React from "react";
import { Link } from "react-router-dom";

const Header = ({ active }) => {
  return (
    <div className="Header">
      <Link to="/">StarWars Fans</Link>

      <nav>
        <li>
          <Link to="/" className={`${active === "home" && "active"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Films" className={`${active === "Films" && "active"}`}>
            Films
          </Link>
        </li>
        <li>
          <Link to="/Planets" className={`${active === "Planets" && "active"}`}>
            Planets
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
