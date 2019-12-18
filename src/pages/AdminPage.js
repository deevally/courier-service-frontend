import React from 'react';
import Nav from '../components/Nav';
import AllShipment from "../components/allShipment";
const AdminPage = () => {
    return (
      <div>
        <Nav createShipment="create shipment" LogOUT="Logout" />
        <AllShipment />
      </div>
    );
}
 
export default AdminPage;