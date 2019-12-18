import React, { Component } from "react";
// import Jobview from "../components/Jobviews";
import "../css/header.css";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Aboutus from "../components/Aboutus";
import Tracking from "../components/Tracking";
import WorldCLass  from "../components/WorldClass";
class JoinUs extends Component {
  render() {
    return (
      <div className="">
        <Header />

        <WorldCLass/>
        <Tracking />

        {/* <Jobview /> */}

        <Aboutus />

        <div className="container-fluid Values py-5">
          <div className="container">
            <CoreValues />
          </div>
        </div>
        {/* <div className="container">
          <NewsLetter />
        </div> */}
        <div className="container-fluid footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default JoinUs;
