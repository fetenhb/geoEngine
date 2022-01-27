import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import logo from "../../assets/log.png";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar fixed-top  ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" width="110" height="90" />
        </a>

        <menu>
          <ul
            className="nav-links"
            id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#AboutUs">About Us</a>
            </li>
            <li>
              <a href="#ourServices">Our Services</a>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>

            {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
            {/* <li className="nav-btn">
              <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"} />
            </li> */}
          </ul>
        </menu>
        <div className="menu-icons" onClick={toggleMenu}>
          {showMenu ? (
            <RiCloseLine color="#fff" size={30} />
          ) : (
            <AiOutlineBars color="#fff" size={27} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
