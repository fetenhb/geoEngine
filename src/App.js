import React, { Component } from "react";
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div>
      <div>
        {" "}
        {/* <Navbar /> */}
        {/* <header className="header-bg">
          <Navbar />
          <Header />
        </header>
        <About />
        <Download />
        <OurServices data-aos="fade-up" /> <Subscribe />
        <Footer /> */}
        <Services />
        {/* <Routes>
          <Route exact path="/" element={<Navbar />} /> */}
        {/* <Route
            exact={true}
            path="/"
            render={() => (
              <>
                <header className="header-bg">
                  <Navbar />
                  <Header />
                </header>
                <About />
                <Download />
                <OurServices data-aos="fade-up" /> <Subscribe />
                <Footer />
              </>
            )}
          /> */}
        {/* <Route
          path="/moreServices"
          render={() => (
            <>
            
              <Services />
            </>
          )}
        /> */}
        {/* </Routes>{" "} */}
      </div>
    </div>
  );
}

export default App;
