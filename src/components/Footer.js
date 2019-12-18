import React from "react";
import "../css/App.css";

const Footer = () => {
  return (
    <div>
      <div id="contactus" className="row">
        <div className="col-md-4">
          <h3 className="font-weight-bold pb-4">Our Corporate Office</h3>
          <p className="text-left footerText">
            {" "}
            Vibranium Valley,
            <br />
            42, Local Airport Road,
            <br />
            Lagos.
          </p>
        </div>
        <div className="col-md-4">
          {/* <h3 className="font-weight-bold pb-4">Our Corporate Office</h3>
          <p className="text-left footerText">
            {" "}
            Vibranium Valley,
            <br />
            42, Local Airport Road,
            <br />
            Lagos.
          </p> */}
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-4">
              <h3 className="font-weight-bold pb-4">Contact</h3>
              <ul className="contactList">
                <li className="">
                  <a href="/">jobs@venturegardengroup.com</a>
                </li>
                <li>
                  {" "}
                  <a href="/"> careers@venturegardengroup.com</a>
                </li>
                <li>
                  <a href="/">+2348000000000</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row footerBase">
        {/* <div className=" col-md-12 col-xs-12">
          <p className="font-italic footerText">
            Transforming Africa through technology
          </p>
        </div> */}
        <div className=" col-md-12 col-xs-12">
          <p className="text-center footerText ">
            Copyright (c) 2019, ProDelivery Courier. All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
