import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";import "../css/App.css";
import imglogo from "../assets/images/logo5.png";
import "../css/Nav.css";


const Nav = ({
  Home,
  Tracking,
  Service,
  Contactus,
  Aboutus,
  LogIN,
  LogOUT,
  createShipment
}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top ">
        <div className="container mt-2">
          <Link
            className="navbar-brand"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={imglogo} alt="" style={{ width: "7rem" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {Home} <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="aboutus"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {Aboutus} <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="tracking"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {Tracking} <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="service"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {Service} <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="core"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {Contactus} <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contactus"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {LogIN} <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="contactus"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {createShipment} <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contactus"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {LogOUT} <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;



// import React, { Component } from "react";
// import imglogo from "../assets/images/logo5.png";
// import { Link, animateScroll as scroll } from "react-scroll";

// export default class Navbar extends Component {
//   scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   render() {
//     return (
//       <nav className="nav" id="navbar">
//         <div className="nav-content">
//           <img
//             src={imglogo}
//             className="nav-logo"
//             alt="Logo"
//             onClick={this.scrollToTop}
//             style={{ width: "9rem" }}
//           />
//           <ul className="nav-items">
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section1"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 1
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section2"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 2
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section3"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 3
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section4"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 4
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="section5"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Section 5
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }
