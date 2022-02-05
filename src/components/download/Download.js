import React, { useEffect } from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import bull from "../../assets/bull_4982.JPG";
import DSC from "../../assets/DSC01559.JPG";
import DTM from "../../assets/DTM2.png";
import Lazhar from "../../assets/Lazhar0967.jpg";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <section id="download" className="down">
      <ul class="honeycomb">
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src={bull} />
          <div class="honeycomb-cell__title">Line Clearance</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src={DSC} />
          <div class="honeycomb-cell__title">Seismic survey</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src={DTM} />
          <div class="honeycomb-cell__title">GIS and Geospatial Analysis</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src={Lazhar} />
          <div class="honeycomb-cell__title">
            Well Positionning and Site surveying
          </div>
        </li>

        <li class="honeycomb-cell honeycomb__placeholder"></li>
      </ul>
      {/* <div className="container download" data-aos="fade-up">
        <h2>SocialX messenger download</h2>
        <p className="u-text-small">
          Our apps are available for download on all stores.
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>
            <div className="download-icon">
              <GrAndroid /> <p>Android</p>
            </div>
            <div className="download-icon">
              <FaWindows /> <p>Windows</p>
            </div>
          </div>
        </IconContext.Provider>
      </div> */}
    </section>
  );
};

export default Download;
