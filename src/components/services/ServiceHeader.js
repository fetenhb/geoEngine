import React from "react";
import "../header/Header.css";
import { BsMouse } from "react-icons/bs";

const ServiceHeader = () => {
  return (
    <div id="serviceHeader">
      <header className="header-bg-service">
        <div class="grid">
          <p class="stroke halftone halftone-color serviceStyle">
            Our services
          </p>
        </div>
        <div className="container headerr">
          <div className="header-left" data-aos="fade-right">
            {/* <h1>
              <span>GEOMATIC AND GEOSCIENCES COMPANY</span>
            </h1> */}

            {/* <p
              style={{
                fontSize: "2.3rem",
                lineHeight: "1.4",
                fontWeight: "300",
              }}
            >
              Solid technical and operational experience in Geomatics techniques
              related to oil, gas and geophysics projects.
            </p> */}
          </div>
          <div className="header-right" data-aos="fade-left">
            {/* <img src={logo} alt="phone" /> */}
          </div>{" "}
          <div className="floating-icon" style={{ bottom: "15%" }}>
            <a href="#serv">
              <BsMouse color="#fff" size={25} className="mouse" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ServiceHeader;
