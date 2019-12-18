import React from "react";
import "../css/Jobviews.css";
import Buttons from "../components/Button";

class Jobview extends React.Component {
  render() {
    return (
      <div className="jobView" id="aboutus">
        <div className="container-fluid jobView_Bg"></div>
        <div className="jobtext">
          <h1> Open Positions</h1>
          <p>
            We're looking for people to join the team who are excited as we are
            to help build platforms that empower future generations to be
            successful.
          </p>
          <Buttons myBtnClass="notification">View Openings</Buttons>
        </div>

        
      </div>
    );
  }
}

export default Jobview;
