import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

import "./Surveying.css";
import Carousel from "./Carousel";
const Surveying = () => {
  useEffect(() => {
    // document.body.className = "bodyServices";
  }, []);
  return (
    <div id="tabs" class="tabs">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="row">
          <div class="col-md-7">
            <ul class="nav nav-tabs row d-flex">
              <li class="nav-item col-3">
                <a
                  class="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                >
                  <Icon
                    icon="icon-park-outline:land-surveying"
                    className="icn"
                  />
                  <h4 class="d-none d-lg-block">Surveying</h4>
                </a>
              </li>
              <li class="nav-item col-3">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                >
                  <Icon icon="eos-icons:pipeline-outlined" className="icn" />
                  <h4 class="d-none d-lg-block"> Pipeline</h4>
                </a>
              </li>
              <li class="nav-item col-3">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-3"
                >
                  <Icon icon="mdi:water-well-outline" className="icn" />
                  <h4 class="d-none d-lg-block"> Wells</h4>
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div
                    class=" order-2 order-lg-1 mt-3 mt-lg-0 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <p class="fst-italic" style={{ fontSize: "18px" }}>
                      GEOENGINE undertake development, measurement and analysis
                      of horizontal and vertical control networks using static
                      and rapid GNSS techniques and geodetic levels. Data is
                      processed with the Least Square Adjustment methods and
                      comprehensive reports are produced showing the residuals
                      and final co-ordinates. Data can be produced in any
                      coordinate system. GEOENGINE can:
                    </p>

                    <ul>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />{" "}
                        Verify Existing Geodetic Network
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />{" "}
                        IGS Points
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />{" "}
                        Establish Datum shift parameters
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />
                        Seismic Survey and stakeout
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />
                        Scouting
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />
                        Define and Resolve Coordinates Problems for old data
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />{" "}
                        Identify and Resurvey of old Seismic lines
                      </li>
                    </ul>
                  </div>
                  {/* <div class="col-lg-6 order-1 order-lg-2 text-center aos-init aos-animate">
                <Carousel />
              </div> */}
                </div>
              </div>
              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class=" order-2 order-lg-1 mt-3 mt-lg-0">
                    <p class="fst-italic" style={{ fontSize: "18px" }}>
                      GEO ENGINE can perform a route survey for pipeline and
                      execute ROW (right of way) survey. This scope includes
                      detailed route selection, surveying of all surface
                      facilities on both sides of the pipeline ROW, any building
                      residence, main water bodies, villages, towns and state
                      boundaries. This includes a complete pipeline profile.
                      GEOENGINE can establishes control points on weld and pipe
                      magnets to control the inertial navigation system (INS)
                      used in pipeline mapping unit for piping inspection.
                    </p>
                  </div>
                  {/* <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/tabs-2.jpg" alt="" class="img-fluid" />
              </div> */}
                </div>
              </div>
              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class=" order-2 order-lg-1 mt-3 mt-lg-0">
                    <p class="fst-italic" style={{ fontSize: "18px" }}>
                      GEO ENGINE offers Well Positioning and Site Survey
                      Services. High skilled staff with a good experience, more
                      than 15 years at CGG, for different environments and
                      clients. GEOENGINE can:
                    </p>
                    <ul>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />
                        Carry out stake out and wells' positioning
                      </li>
                      <li>
                        <Icon
                          icon="ri:check-double-line"
                          className="check-icon"
                        />
                        Supplies the latest technological surveying equipment
                        required to perform Well Positioning.
                      </li>
                    </ul>
                  </div>
                  {/* <div class="col-lg-6 order-1 order-lg-2 text-center">
                <Carousel />
              </div> */}
                </div>
              </div>
              <div class="tab-pane" id="tab-4">
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>
                      Omnis fugiat ea explicabo sunt dolorum asperiores sequi
                      inventore rerum
                    </h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p class="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i class="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 text-center"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveying;
