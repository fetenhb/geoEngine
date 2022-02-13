import React, { useEffect } from "react";
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import logogeo from "../../assets/Logo-geo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>" Geomatic and Geosciences Engineering."</h2>
        <h1>GEOENGINE</h1>
        {/* <img src={logogeo} width="300px" /> */}
        <div className="social-icons">
          {/* <div className="social-icon">
            <TiSocialGooglePlus />
          </div> */}
          <a
            href="https://www.facebook.com/Geoengine-104952554767600"
            target="_blank"
          >
            {" "}
            <div className="social-icon">
              <FaFacebookF />
            </div>{" "}
          </a>
          <a
            href="https://www.linkedin.com/company/geo-engine/about/"
            target="_blank"
          >
            {" "}
            <div className="social-icon">
              {" "}
              <FaLinkedin />
            </div>{" "}
          </a>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
