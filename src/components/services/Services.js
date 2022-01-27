import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { Icon } from "@iconify/react";
import "./Services.css";
import Surveying from "./moreServices/Surveying";
import Carousel from "./moreServices/Carousel";
import ServiceHeader from "./ServiceHeader";

const Services = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <ServiceHeader />
      <h1>Responsive CSS Tabs</h1>
      <div class="tab_container">
        <input id="tab1" type="radio" name="tabs" />
        <label for="tab1">
          <i class="fa fa-code"></i>
          <span>Code</span>
        </label>
        <input id="tab2" type="radio" name="tabs" />
        <label for="tab2">
          <i class="fa fa-pencil-square-o"></i>
          <span>About</span>
        </label>
        <input id="tab3" type="radio" name="tabs" />
        <label for="tab3">
          <i class="fa fa-bar-chart-o"></i>
          <span>Services</span>
        </label>
        <input id="tab4" type="radio" name="tabs" />
        <label for="tab4">
          <i class="fa fa-folder-open-o"></i>
          <span>Portfolio</span>
        </label>
        <input id="tab5" type="radio" name="tabs" />
        <label for="tab5">
          <i class="fa fa-envelope-o"></i>
          <span>Contact</span>
        </label>
        <input id="tab5" type="radio" name="tabs" />
        <label for="tab5">
          <i class="fa fa-envelope-o"></i>
          <span>Contact</span>
        </label>{" "}
        <input id="tab5" type="radio" name="tabs" />
        <label for="tab5">
          <i class="fa fa-envelope-o"></i>
          <span>Contact</span>
        </label>
        <section id="content1" class="tab-content sec">
          <h3>Headline 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </section>
        <section id="content2" class="tab-content sec">
          <h3>Headline 2</h3>

          <Surveying />
        </section>
        <section id="content3" class="tab-content sec">
          <h3>Headline 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section id="content4" class="tab-content sec">
          <h3>Headline 4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
        <section id="content5" class="tab-content sec">
          <h3>Headline 5</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Services;