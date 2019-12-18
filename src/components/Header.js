import React from "react";
import "../css/header.css";
import "../css/slider.css";
import Button from "../components/Button.js";
import Nav from "../components/Nav";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/App.css";

const Header = () => {
  return (
    <div>
      {/* <section className="Header " id="home">
        <Nav
          Home="Home"
          Tracking="Tracking"
          Aboutus="About Us"
          Service="Service"
          Contactus="Contact us"
          logIN="login"
        />
        <div className="join">
          <p className="join_team">Welcome to ProDelivery Courier</p>
          <Link to="tracking" spy={true} smooth={true} offset={-70} duration={500}>
            {" "}
            <Button children="Track your package" myBtnClass="viewbtn" />
          </Link>
        </div>
      </section> */}
      <Nav
        Home="Home"
        Tracking="Tracking"
        Aboutus="About Us"
        Service="Service"
        Contactus="Contact us"
        logIN="login"
      />
      {/* <div className="landing-header" id="home">
        <h1>Welcome to YelpCamp!</h1>
        <a href="/campgrounds" class="btn btn-lg btn-success">
          View All Campgrounds
        </a>
      </div> */}

      <div className="landing-header join" id="home">
        <p className="join_team">Welcome to ProDelivery Courier</p>
        <Link
          to="tracking"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {" "}
          <Button children="Track your package" myBtnClass="viewbtn" />
        </Link>
      </div>
      <ul class="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
