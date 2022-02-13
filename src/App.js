import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";

import {
  Navbar,
  Header,
  OurServices,
  Download,
  Subscribe,
  About,
  Footer,
} from "./components";
import Services from "./components/services/Services";
import Service from "./components/ourServices/Service";
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
            <Download />
            <OurServices data-aos="fade-up" /> <Subscribe />
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
