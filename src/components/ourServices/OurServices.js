import React, { useEffect } from "react";
import "./OurServices.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import geo from "../../assets/div11.png";
import Feature from "./Service";
import { FeatureList } from "./data";
import Button from "../UI/Button/Button";

import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="ourServices">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <div className="u-title">
            <h1>OUR SERVICES</h1>
            <hr />
          </div>

          <BsFillBookmarkStarFill color="#00ff00" size={30} />
          <h2>GEO ENGINE Geomatic and Geosciences Company</h2>
          <p className="u-text-small">
            Smart and scalable solution at the cutting edge of the latest
            techniques in precise surveying control and Geographic Information
            Systems.
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={geo} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
        <div className=" moreServices">
          <Button text={"More Services"} btnClass={"btn-light"} href={"#"} />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
