import React, { useState } from "react";
import "./Footer.css";
import { HashLink as Link } from "react-router-hash-link";

import logo from "../../assets/logoo.png";
import { Icon } from "@iconify/react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    // <section id="footer">
    //   <div className="container footer">
    //     <div className="footer-box">
    //       <h4>Useful Links</h4>
    //       <div className="footer-links">
    //         <a href="#">&bull; Support</a>
    //         <a href="#">&bull; About</a>
    //         <a href="#">&bull; Learn</a>
    //         <a href="#">&bull; Hosting</a>
    //         <a href="#">&bull; Messenger</a>
    //       </div>
    //     </div>
    //     <div className="footer-box">
    //       <h4>Support</h4>
    //       <div className="footer-links">
    //         <a href="#">&bull; Support</a>
    //         <a href="#">&bull; About</a>
    //         <a href="#">&bull; Learn</a>
    //         <a href="#">&bull; Hosting</a>
    //         <a href="#">&bull; Messenger</a>
    //       </div>
    //     </div>
    //     <div className="footer-box">
    //       <h4>Contact Us</h4>
    //       <div className="footer-contact u-text-small">
    //         <p>
    //           <FaMapMarkerAlt /> &nbsp; Address: United States.
    //         </p>
    //         <p>
    //           <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
    //         </p>
    //         <p>
    //           <FaFax /> &nbsp; Fax: +12342762178
    //         </p>
    //         <p>
    //           <FaEnvelope /> &nbsp; Email: info@socialx.com
    //         </p>
    //         <p>
    //           <FaGlobe /> &nbsp; Website: www.socialx.com
    //         </p>
    //       </div>
    //     </div>
    //     <div className="footer-box">
    //       <img src={logo} alt="logo" width={"100px"} />
    //       <p className="u-text-small">&copy; Copyright 2021. SocialX.com</p>
    //     </div>
    //   </div>
    // </section>
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
          >
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>
                  Geoengine<span>.</span>
                </h3>
                <p>
                  Carthage Centre Rue du lac de Constance Bloc TUNISIE <br />
                  A2 Les Berges du Lac
                  <br />
                  1053 Tunis <br />
                  <br />
                  <strong>Phone:</strong> +216 71 160 412
                  <br />
                  <strong>Email:</strong> contact@geoengine.net
                  <br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                    <a href="/#AboutUs">About us</a>
                  </li>
                  <li>
                    <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                    <a href="/#ourServices">Our Services</a>
                  </li>
                  <li>
                    <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                    <a href="/#contact">Contact Us</a>
                  </li>
                  {/* <li>
                    <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                    <a href="#">Privacy policy</a>
                  </li> */}
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-6">
                        {" "}
                        <li>
                          <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                          <Link to="/moreServices#serv">
                            <a>Surveying</a>{" "}
                          </Link>
                        </li>
                        <li>
                          <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                          <Link to="/moreServices/permitting#servicess">
                            {" "}
                            <a>Permitting</a>
                          </Link>
                        </li>
                        <li>
                          <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                          <Link to="/moreServices/Training#servicess">
                            {" "}
                            <a>Training</a>
                          </Link>
                        </li>
                        <li>
                          <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                          <Link to="/moreServices/Bathymetric#servicess">
                            {" "}
                            <a>Bathymetric</a>
                          </Link>
                        </li>
                      </div>
                      <div class="col-md-6">
                        {" "}
                        <li>
                          <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                          <Link to="/moreServices/Gis#servicess">
                            {" "}
                            <a>GIS</a>
                          </Link>
                        </li>
                        <li>
                          <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                          <Link to="/moreServices/Geosciences#servicess">
                            {" "}
                            <a>Geosciences</a>
                          </Link>
                        </li>
                        <li>
                          <Icon icon="bx:bx-chevron-right" className="icnn" />{" "}
                          <Link to="/moreServices/ManpowerProvider#servicess">
                            {" "}
                            <a>Manpower Provider</a>
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <div className="footer-box">
                  <img
                    src={logo}
                    alt="logo"
                    width={"300px"}
                    style={{ marginLeft: "150px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Geomatics and geosciences engineering SARL</span>
              </strong>
            </div>
          </div>
          <div class="social-links text-center text-md-end pt-3 pt-md-0">
            <a
              href="https://www.facebook.com/Geoengine-104952554767600"
              class="facebook"
              target="_blank"
            >
              <Icon icon="bx:bxl-facebook" />
            </a>
            <a href="#" class="instagram">
              <Icon icon="bx:bxl-instagram" />
            </a>

            <a
              href="https://www.linkedin.com/company/geo-engine/about/"
              target="_blank"
              class="linkedin"
            >
              <Icon icon="bx:bxl-linkedin" />
            </a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Footer;
