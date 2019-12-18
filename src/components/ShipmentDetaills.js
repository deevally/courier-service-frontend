import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BaseUrl } from "../utils/baseUrl.js";
import { Container, Row, Col } from "react-bootstrap";

import Axios from "axios";
import Nav from "../components/Nav";
import Button from "../components/Button";

class ShipmentDetails extends Component {
  state = {
    singleShipment: {},
    err: "",
    loading: false
  };

  async getSingleShipment() {
    const { shippingId } = this.props.match.params;
    let url = `${BaseUrl}/shipping/${shippingId}`;
    try {
      const ship = await Axios.get(url);
      // console.log(ship.data);
      this.setState({ singleShipment: ship.data });
    } catch (error) {
      this.setState({ err: error });
    }
  }

  componentDidMount() {
    this.getSingleShipment();
  }

  updateShipping = shippingId => {
    const { history } = this.props;
    history.push(`/shipping/${shippingId}`);
  };

  gotoAdminPage = () => {
    const { history } = this.props;
    history.push("/admin");
  };
  render() {
    const value = this.state.singleShipment;
    return (
      <div>
        <div className="shipping">
          <table
            class="table table-bordered table-dark"
            style={{ paddingTop: "15rem" }}
          >
            <thead>
              <tr>
                <th scope="col">Reciever Name</th>
                <th scope="col">Reciever Address</th>
                <th scope="col">TrackingNumber</th>
                <th scope="col">ShippingStatus</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">dateShipped</th>
                <th scope="col">timeShipped</th>
                <th scope="col">dateArrival</th>
                <th scope="col">packageDetails</th>
                <th scope="col">deliveryType</th>
                <th scope="col">itemColor</th>
                <th scope="col">itemContent</th>
                <th scope="col">itemHeight</th>
                <th scope="col">itemWeight</th>
                <th scope="col">Current location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{value.RecieverName}</td>
                <td>{value.RecieverAddress}</td>
                <td>{value.TrackingNumber}</td>
                <td>{value.ShippingStatus}</td>
                <td>{value.locationFrom}</td>
                <td>{value.locationTo}</td>
                <td>{value.dateShipped}</td>
                <td>{value.timeShipped}</td>
                <td>{value.dateArrival}</td>
                <td>{value.packageDetails}</td>
                <td>{value.deliveryType}</td>
                <td>{value.itemColor}</td>
                <td>{value.itemContent}</td>
                <td>{value.itemHeight}</td>
                <td>{value.itemWeight}</td>
                <td>{value.location}</td>
              </tr>
            </tbody>
          </table>
          <div
            className="container"
            style={{ textAlign: "center", padding: "3rem" }}
          >
            <button className="btn2" onClick={this.gotoAdminPage}>
              Go back to Admin page
            </button>
            <button className="btn">Update</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShipmentDetails);
