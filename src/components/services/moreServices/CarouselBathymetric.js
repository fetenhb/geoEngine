import React from "react";

import Bathymetric1 from "../../../assets/Bathymetric1.png";
import Bathymetric2 from "../../../assets/Bathymetric2.png";
import Bathymetric3 from "../../../assets/Bathymetric3.png";
import Bathymetric4 from "../../../assets/Bathymetric4.png";
import "./Carousel.css";
const CarouselBathymetric = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicatorr"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorr"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorr"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorr"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorr"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img
              src={Bathymetric1}
              class="d-block w-100"
              alt="..."
              height={"400px"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={Bathymetric2}
              class="d-block w-100"
              alt="..."
              height={"400px"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={Bathymetric3}
              class="d-block w-100"
              alt="..."
              height={"400px"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={Bathymetric4}
              class="d-block w-100"
              alt="..."
              height={"400px"}
            />
          </div>{" "}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicatorr"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicatorr"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselBathymetric;
