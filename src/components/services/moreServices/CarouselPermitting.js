import React from "react";

import permit1 from "../../../assets/permit1.png";
import permit2 from "../../../assets/permit2.png";
import permit3 from "../../../assets/permit3.jpg";
import permit4 from "../../../assets/permit4.jpg";
import "./Carousel.css";

const CarouselPermitting = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicator"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicator"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicator"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicator"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicator"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img
              src={permit1}
              class="d-block w-100"
              alt="..."
              height={"600px"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={permit2}
              class="d-block w-100"
              alt="..."
              height={"600px"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={permit3}
              class="d-block w-100"
              alt="..."
              height={"600px"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={permit4}
              class="d-block w-100"
              alt="..."
              height={"600px"}
            />
          </div>{" "}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicator"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicator"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselPermitting;
