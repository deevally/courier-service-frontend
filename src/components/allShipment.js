import React, { Component } from "react";
import { BaseUrl } from "../utils/baseUrl";
import axios from "axios";
import "../css/allshipment.css"
class allShipment extends Component {
  state = {
    shipment: [],
    shipmentHeader: {
      no: "No",
      RecieverName: "Reciever's Name",
      RecieverAddress: "Reciever's Address",
      location: "location",
      packageDetails: "Package Details",
      ShippingStatus: "",
      TrackingNumber: "",
      dateArrival: "",
      dateShipped: "",
      deliveryType: "",
      itemColor: "",
      itemContent: "",
      itemHeight: "",
      itemWeight: "",
      locationFrom: "",
      locationTo: "",
      timeShipped: ""
    }
  };
  async componentDidMount() {
    let url = `${BaseUrl}/shippings`;
    console.log(url);
    try {
      const shipment = await axios.get(url);
      this.setState({ shipment: shipment.data.docs });
    } catch (error) {}

    console.log("SHIPPMENTSSSS");
    console.log(this.state.shipment);
  }

  handleDelete = id => {
    let url = `${BaseUrl}/shipping/${id}`;
    fetch(url, { method: "DELETE" })
      .then(() => {
        console.log("removed");
      })
      .catch(err => {
        console.error(err);
      });
    this.DeleteId(id);
  };

  DeleteId = id => {
    const DeleteShipment = this.state.shipment.filter(ship => ship._id !== id);
    this.setState({
      shipment: DeleteShipment
    });
  };

  renderTableHeader() {
    let header = Object.values(this.state.shipmentHeader);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    let i = 1;
    return this.state.shipment.reverse().map(ship => {
      const {
        _id,
        RecieverAddress,
        RecieverName,
        ShippingStatus,
        TrackingNumber,
        dateArrival,
        dateShipped,
        deliveryType,
        itemColor,
        itemContent,
        itemHeight,
        itemWeight,
        location,
        locationFrom,
        locationTo,
        packageDetails,
        timeShipped
      } = ship;
      return (
        <tr key={_id}>
          <td>{i++}</td>
          <td>{RecieverName}</td>
          <td>{RecieverAddress}</td>
          <td>{location}</td>
          <td>{packageDetails}</td>
          <td>
            <button onClick={() => this.handleDelete(_id)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  Logout = () => {
    const { history } = this.props;
    localStorage.clear();
    history.push("/login");
  };
  render() {
    return (
      <div>
        <div
          className="tableBorder"
          //   style={{ paddingTop: "10rem", textAlign: "center" }}
        >
          <h2 id="title">All shipments</h2>
          <table id="shipListing" className="mx-auto">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default allShipment;
