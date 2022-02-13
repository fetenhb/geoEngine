import React from "react";
import Navbar from "../navbar/Navbar";
import { Icon } from "@iconify/react";
import "../services/Services.css";
import Surveying from "../services/moreServices/Surveying";
import ServiceHeader from "../services/ServiceHeader";
import "../services/moreServices/Surveying.css";
import CarouselBathymetric from "../services/moreServices/CarouselBathymetric";
import CarouselGis from "../services/moreServices/CarouselGis";
import Geosciences from "../services/moreServices/Geosciences";
import Permetting from "../services/moreServices/Permetting";
import Footer from "../footer/Footer";
import ScrollToTop from "../ScrollToTop";
const FooterManpowerProvider = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <ServiceHeader />
      {/* <h1 id="moreeServices">Responsive CSS Tabs</h1> */}
      <div class="tab_container" id="servicess">
        <input id="tab1" type="radio" name="tabs" />
        <label className="labelSer" for="tab1">
          <Icon className="iconnn" icon="icon-park-outline:land-surveying" />

          <span>Surveying</span>
        </label>
        <input id="tab2" type="radio" name="tabs" />
        <label className="labelSer" for="tab2">
          <Icon className="iconnn" icon="ant-design:file-done-outlined" />
          <span>Permitting </span>
        </label>
        <input id="tab3" type="radio" name="tabs" />
        <label className="labelSer" for="tab3">
          <Icon className="iconnn" icon="healthicons:i-training-class" />
          <span>Training</span>
        </label>
        <input id="tab4" type="radio" name="tabs" />
        <label className="labelSer" for="tab4">
          <Icon className="iconnn" icon="gis:measure" />
          <span>Bathymetric</span>
        </label>
        <input id="tab5" type="radio" name="tabs" />
        <label className="labelSer" for="tab5">
          <Icon className="iconnn" icon="emojione-monotone:world-map" />
          <span>GIS</span>
        </label>
        <input id="tab6" type="radio" name="tabs" />
        <label className="labelSer" for="tab6">
          <Icon className="iconnn" icon="gis:earth-north-o" />
          <span>Geosciences</span>
        </label>{" "}
        <input id="tab7" type="radio" name="tabs" defaultChecked={true} />
        <label className="labelSer" for="tab7">
          <Icon className="iconnn" icon="gis:position-man" />
          <span>Manpower Provider</span>
        </label>
        <section id="content1" class="tab-content sec">
          <h3>Surveying</h3>
          <Surveying />
        </section>
        <section id="content2" class="tab-content sec">
          <h3>Permitting </h3> <Permetting />
        </section>
        <section id="content3" class="tab-content sec">
          <h3>Training</h3>{" "}
          <div className="container">
            <p style={{ fontSize: "18px", marginTop: "30px" }}>
              GEO ENGINE deploys its rich experience to extend customer
              Geomatics techniques knowledge base by maintaining a solid
              training program. The training catalogue include the fowling
              course files:
            </p>
            <ul>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> GIS
                Fundamentals
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> GIS
                Mapping
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> GIS
                and Geospatial Analysis
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> GIS
                Programming
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Photogrammetry
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Spatial Database management
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Remote Sensing
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> GNSS
                Precise Surveying
              </li>
            </ul>
          </div>
        </section>
        <section id="content4" class="tab-content sec">
          <h3>
            Bathymetric and Hydrographic Surveys and Mapping by echosounding
          </h3>
          <div className="container">
            <p style={{ fontSize: "18px", marginTop: "30px" }}>
              With its sophisticated sonar equipment, ‘GEOENGINE’ presents a
              clearer picture of our water storage capacity. We can deliver
              bathymetric surveys in different sub-aquatic environments (rivers,
              lakes, Dam, sea). Depending on the type of mapping model
              requested, we deliver the most appropriate solution and tools. By
              ensuring synchronization of the bathymetric and terrestrial data,
              we can produce a continuous model covering both submerged areas
              and dry land areas.
            </p>

            <CarouselBathymetric />
          </div>
        </section>
        <section id="content5" class="tab-content sec">
          <h3>GIS DATA COLLECTION AND PROCESSING</h3>{" "}
          <div className="container">
            <p style={{ fontSize: "18px", marginTop: "30px" }}>
              GEOENGINE performs data asset collection using innovative GIS
              techniques in order to record positions and user defined
              attributes to help clients developing their own GIS processes.
              GEOENGINE can :
            </p>
            <ul>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> Help
                customer to review and explore data
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Create data and edit GIS data
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Perform spatial database modeling
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Integrate data sets from different sources
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Transform data into different co-ordinate systems and different
                map projections
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Re-sampling resulting in a new representation/format of the same
                data.
              </li>
            </ul>
            <CarouselGis />
          </div>
        </section>
        <section id="content6" class="tab-content sec">
          <h3>Geosciences</h3>
          <Geosciences />
        </section>
        <section id="content7" class="tab-content sec">
          <h3>Manpower Provider</h3>{" "}
          <div className="container">
            <ul style={{ marginTop: "30px" }}>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Client Representative
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> Crew
                Management (PC/PM)
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> GIS
                Specialist
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Senior Surveyor
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                surveyors
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Observer
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> Line
                Assistant
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> Vibe
                Tech
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Mechanic
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> HSE
                Advisor
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Seismic QC
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                In-Field Processing
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> Camp
                Boss
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" /> Land
                transport Coordinator
              </li>
              <li>
                <Icon icon="ri:check-double-line" className="check-icon" />{" "}
                Radio Operator
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FooterManpowerProvider;
