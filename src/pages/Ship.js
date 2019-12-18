import React from "react";
import Nav from "../components/Nav";
import Shipment from "../components/ShipmentDetaills";

const Ship = () => {
  return (
    <div>
      <Nav />
      <div style={{paddingTop:"15rem"}}>
        <Shipment />
      </div>
    </div>
  );
};

export default Ship;
