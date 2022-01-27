import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";
import logo from "../../assets/logoo.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>GEOMATIC AND GEOSCIENCES COMPANY</span>
            {/* <span>
              Solid technical and operational experience in Geomatics techniques
              related to oil, gas and geophysics projects.
            </span>
            <span>messaging system</span> */}
          </h1>
          <p
            style={{ fontSize: "2.3rem", lineHeight: "1.4", fontWeight: "300" }}
          >
            Solid technical and operational experience in Geomatics techniques
            related to oil, gas and geophysics projects.
          </p>
          {/* <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
          </div> */}
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={logo} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#ourServices">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
