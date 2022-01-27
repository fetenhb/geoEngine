import React from "react";
import "../header/Header.css";
const ServiceHeader = () => {
  return (
    <div>
      <header className="header-bg">
        <div className="container header">
          <div className="header-left" data-aos="fade-right">
            <h1>
              <span>GEOMATIC AND GEOSCIENCES COMPANY</span>
            </h1>
            <p
              style={{
                fontSize: "2.3rem",
                lineHeight: "1.4",
                fontWeight: "300",
              }}
            >
              Solid technical and operational experience in Geomatics techniques
              related to oil, gas and geophysics projects.
            </p>
          </div>
          <div className="header-right" data-aos="fade-left">
            {/* <img src={logo} alt="phone" /> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default ServiceHeader;
