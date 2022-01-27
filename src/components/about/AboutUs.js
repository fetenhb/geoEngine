import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./About";
import { BsInfoSquare } from "react-icons/bs";

import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="AboutUs">
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          <h1>ABOUT US</h1>
          <hr /> <br /> <BsInfoSquare color="#00ff00" size={30} />
          <br /> <br />
          <p className="u-text-small">
            GEO ENGINE Geomatic and Geosciences Company founded by a group of
            EX-CGG engineers who have solid technical and operational
            experience. GEOENGINE was born out of the desire to promote
            innovative and smart solutions to our clients in the fields of
            geosciences and geomatic.
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
