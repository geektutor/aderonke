/* eslint-disable react-hooks/exhaustive-deps */
import "../css/home.css";
import menu from "../assets/images/menu.png";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const Nav = ({ handleToggle,other,check }) => {
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
          <label className="switch2">
            <input checked={check} onClick={handleToggle} type="checkbox" />
            <span className="slider2 round"></span>
          </label>
        </div>
      </div>

      <nav>
       { other==='true'?
       <ul className={`nav_list ${isNavOpen ? "nav-opened" : ""}`}>
       <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
      
         <Link to="/#about">Bio</Link>
       </li>

       <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">

         <Link to="/#work">Work</Link>
       </li>
       <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
       
         <Link to="/#blog">Blog</Link>
       </li>
       <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
         <Link to="/#contact">Contact</Link>
       </li>
     </ul>
       : <ul className={`nav_list ${isNavOpen ? "nav-opened" : ""}`}>
          <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
            <a href="#about">Bio</a>
          </li>

          <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
            <a href="#work">Work</a>
          </li>
          <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
            <a href="#blog">Blog</a>
          </li>
          <li onClick={() => setisNavOpen(!isNavOpen)} className="nav_link">
            <a href="#contact">Contact</a>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Nav;
