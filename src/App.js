import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";

import {
  Navbar,
  Header,
  OurServices,
  Gallery,
  Social,
  About,
  Footer,
} from "./components";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import FooterPermitting from "./components/footerLinks/FooterPermitting";
import FooterTraining from "./components/footerLinks/FooterTraining";
import FooterBathymetric from "./components/footerLinks/FooterBathymetric";
import FooterGIS from "./components/footerLinks/FooterGIS";
import FooterGeosciences from "./components/footerLinks/FooterGeosciences";
import FooterManpowerProvider from "./components/footerLinks/FooterManpowerProvider";

function App() {
  return (
    <Routes>
      <Route
        exact={true}
        path="/"
        element={
          <>
            {" "}
            <header className="header-bg">
              <Navbar />
              <Header />
            </header>
            <About />
            <Gallery />
            <OurServices data-aos="fade-up" /> <Social />
            <Contact />
            <Footer />
          </>
        }
      />
      {/* <Services /> */}
      <Route path="/moreServices" element={<Services />} />
      <Route path="/moreServices/permitting" element={<FooterPermitting />} />
      <Route path="/moreServices/Training" element={<FooterTraining />} />
      <Route path="/moreServices/Bathymetric" element={<FooterBathymetric />} />
      <Route path="/moreServices/GIS" element={<FooterGIS />} />
      <Route path="/moreServices/Geosciences" element={<FooterGeosciences />} />
      <Route
        path="/moreServices/ManpowerProvider"
        element={<FooterManpowerProvider />}
      />
    </Routes>
  );
}

export default App;
