/* eslint-disable react-hooks/exhaustive-deps */
import "../css/home.css";
import menu from "../assets/images/menu.png";

import { useState } from "react";

const Nav = ({ handleToggle }) => {
  const [isNavOpen, setisNavOpen] = useState(false);

  return (
    <header className="nav bg-white clr-primary">
      <div className="nav-left">
        <button
          aria-label="open navbar"
          className="nav-ctrl-btn round-btn btn-sec btn"
          onClick={() => setisNavOpen(!isNavOpen)}
        >
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <img src={menu} alt="menu" />
        </button>

        <div  className="toggle">
          <label class="switch">
            <input onClick={handleToggle} type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>

      <nav>
        <ul className={`nav_list ${isNavOpen ? "nav-opened" : ""}`}>
          <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
            <a href="#about">Bio</a>
          </li>

          <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
            <a href="#work">work</a>
          </li>
          <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
            <a href="#blog">Blog</a>
          </li>
          <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
