import React from "react";
import CarouselPermitting from "./CarouselPermitting";
import "../Services.css";
const Permetting = () => {
  return (
    <div>
      <section id="Permitting">
        {" "}
        <h3>Permitting </h3>{" "}
        <div className="container">
          <p style={{ fontSize: "18px", marginTop: "30px" }}>
            Seismic permitting is essential to oil and gas exploration, so we
            provide turnkey 2D and 3D seismic permitting services. From start to
            finish, our seismic project managers are trained to handle
            everything — including research, lease checks, verification of
            ownership, and more.
          </p>
          <CarouselPermitting />
        </div>
      </section>
    </div>
  );
};

export default Permetting;
