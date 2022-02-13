import React from "react";
import { Icon } from "@iconify/react";

import "./Surveying.css";
const Geosciences = () => {
  return (
    <div id="geo" class="tabs">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="row">
          <div class="" style={{ display: "flex" }}>
            <ul class="nav nav-tabs row d-flex col-md-4">
              <li class="nav-item col-3">
                <a
                  class="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab--1"
                >
                  <Icon icon="ic:outline-water-drop" className="icn" />
                  <h4 class="d-none d-lg-block">Hydrogeology</h4>
                </a>
              </li>
              <li class="nav-item col-3">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab--2"
                >
                  <Icon icon="gis:globe-earth" className="icn" />
                  <h4 class="d-none d-lg-block">Environment</h4>
                </a>
              </li>
            </ul>

            <div class="tab-content col-md-8">
              <div class="tab-pane active show" id="tab--1">
                <div class="row">
                  <div
                    class=" order-2 order-lg-1 mt-3 mt-lg-0 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <p class="fst-italic" style={{ fontSize: "18px" }}>
                      Geoengine's team of hydrogeological specialists have a
                      good experience in carrying out hydrogeological and
                      geophysical studies. They carried out research projects on
                      groundwater and analysis of water vulnerability. :
                    </p>

                    <ul>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />{" "}
                        Groundwater research
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />{" "}
                        Aquifer management and monitoring of water wells
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />{" "}
                        Water vulnerability study
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />
                        Hydrogeological study
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />
                        Quality - piezometric measurement campaigns
                      </li>
                    </ul>
                  </div>
                  {/* <div class="col-lg-6 order-1 order-lg-2 text-center aos-init aos-animate">
                  <Carousel />
                </div> */}
                </div>
              </div>
              <div class="tab-pane" id="tab--2">
                <div class="row">
                  <div class=" order-2 order-lg-1 mt-3 mt-lg-0">
                    <p class="fst-italic" style={{ fontSize: "20px" }}>
                      Environmental, Social, and Health Impact Assessment
                      (ESHIA)
                    </p>
                  </div>
                  {/* <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/tabs-2.jpg" alt="" class="img-fluid" />
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geosciences;
