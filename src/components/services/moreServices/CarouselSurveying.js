import React from "react";
import car1 from "../../../assets/car1.jpg";
import car2 from "../../../assets/car2.JPG";
import car3 from "../../../assets/car3.jpg";
import car4 from "../../../assets/car4.jpg";
import car5 from "../../../assets/car5.JPG";
import car6 from "../../../assets/car6.JPG";
import car7 from "../../../assets/car7.jpg";
import car8 from "../../../assets/car8.JPG";
import car9 from "../../../assets/car9.jpg";
import car10 from "../../../assets/car10.jpg";
import car11 from "../../../assets/car11.jpg";
import car12 from "../../../assets/car12.jpg";
import "./Carousel.css";

const CarouselSurveying = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="10"
            aria-label="Slide 11"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="11"
            aria-label="Slide 12"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={car1} class="d-block w-100" alt="..." height={"600px"} />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car2} class="d-block w-100" alt="..." height={"600px"} />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car3} class="d-block w-100" alt="..." height={"600px"} />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car4} class="d-block w-100" alt="..." height={"600px"} />
          </div>{" "}
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car5} class="d-block w-100" alt="..." height={"600px"} />
          </div>{" "}
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car6} class="d-block w-100" alt="..." height={"600px"} />
          </div>{" "}
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car7} class="d-block w-100" alt="..." height={"600px"} />
          </div>{" "}
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car8} class="d-block w-100" alt="..." height={"600px"} />
          </div>{" "}
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car9} class="d-block w-100" alt="..." height={"600px"} />
          </div>{" "}
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car10} class="d-block w-100" alt="..." height={"600px"} />
          </div>{" "}
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car11} class="d-block w-100" alt="..." height={"600px"} />
          </div>{" "}
          <div class="carousel-item" data-bs-interval="2000">
            <img src={car12} class="d-block w-100" alt="..." height={"600px"} />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselSurveying;
