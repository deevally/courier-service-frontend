import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "../components/Button";
// import FormErrors from "../components/formErrors";
import "../css/login-signup.css";
import { BaseUrl } from "../utils/baseUrl";


const url = `${BaseUrl}/createshipping`;


class CreatePackage extends Component {
  state = {
      packageExists: {
      status: false,
      message: ""
    },
    loading: false,
    submitting: false,
    RecieverName: "",
    RecieverAddress: "",
    location: "",
    packageDetails: "",
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
  };

  handleUserInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {
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
    } = this.state;
    const user = {
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
    };
    this.setState({ loading: true, submitting: true });
    try {
      const pack = await Axios.post(url, user);
      console.log(pack);
      this.props.history.push("/admin");
    } catch (error) {
        console.log(error.response);
        console.log(error);
      this.setState({
        packageExists: {
          ...this.state.packageExists,
          status: true,
          message: error.response.data
        },
        submitting: false
      });
    }
  };
  // componentDidMount() {
  //   this.handleSubmit();
  // }
//   validateField(fieldName, value) {
//     const { fullnameValid, emailValid, passwordValid, formErrors } = this.state;
//     let validationFormErrors = formErrors;
//     let validateEmail = emailValid;
//     let validatePassword = passwordValid;
//     let validateFullname = fullnameValid;

//     switch (fieldName) {
//       case "email":
//         validateEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         validationFormErrors.email = validateEmail ? "" : " is not valid!";
//         break;
//       case "password":
//         validatePassword = value.length >= 6;
//         validationFormErrors.password = validatePassword
//           ? ""
//           : " must be 6 characters or more!";
//         break;
//       case "fullname":
//         validateFullname = value.length >= 6;
//         validationFormErrors.fullname = validateFullname
//           ? ""
//           : " must be 6 characters or more!";
//         break;
//       default:
//         break;
//     }

//     this.setState(
//       {
//         formErrors: validationFormErrors,
//         fullnameValid: validateFullname,
//         emailValid: validateEmail,
//         passwordValid: validatePassword
//       },
//       this.validateForm
//     );
//   }

//   validateForm() {
//     const { fullnameValid, emailValid, passwordValid } = this.state;
//     this.setState({
//       formValid: fullnameValid && emailValid && passwordValid
//     });
//   }
//   errorClass(error) {
//     return error.length === 0 ? "" : "alert alert-danger";
//   }

  render() {
    const {
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
      timeShipped,
      packageExists,
      submitting
    } = this.state;
    return (
      <div className="container-parent">
        <Nav Blog="Blog" Jobs="Jobs" />

        {/* <FormErrors formErrors={formErrors} /> */}
        {/* {loading === true ? <Spinner />: false} */}
        <div className="container-fluid login-parent-container">
          {packageExists.status && (
            <div className="errordesign">{packageExists.message}</div>
          )}

          <div className="row ml-auto mr-auto login-container">
            <div className="login-info">
              <p className="sign">Create a Shipment</p>
              <form className="forms" action="" onSubmit={this.handleSubmit}>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Receiver's name"
                    name="RecieverName"
                    value={RecieverName}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Receiver's Address"
                    name="RecieverAddress"
                    value={RecieverAddress}
                  ></input>
                </label>

                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Shipping status"
                    name="ShippingStatus"
                    value={ShippingStatus}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Tracking number"
                    name="TrackingNumber"
                    value={TrackingNumber}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Date of shipping"
                    name="dateShipped"
                    value={dateShipped}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Date of arrival"
                    name="dateArrival"
                    value={dateArrival}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Time shipped"
                    name="timeShipped"
                    value={timeShipped}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="From"
                    name="locationFrom"
                    value={locationFrom}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="To"
                    name="locationTo"
                    value={locationTo}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Delivery type"
                    name="deliveryType"
                    value={deliveryType}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Color of item"
                    name="itemColor"
                    value={itemColor}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Content of item"
                    name="itemContent"
                    value={itemContent}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Height of item"
                    name="itemHeight"
                    value={itemHeight}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Weight of item"
                    name="itemWeight"
                    value={itemWeight}
                  ></input>
                </label>
                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Current location"
                    name="location"
                    value={location}
                  ></input>
                </label>

                <label htmlFor="">
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className="name"
                    type="text"
                    placeholder="Package details"
                    name="packageDetails"
                    value={packageDetails}
                  ></input>
                </label>

                <Button
                  onClick={this.setRedirect}
                  myBtnClass="form-btn"
                  btnType=""
                >
                  {submitting === false ? "Create" : "Creating..."}
                </Button>
              </form>
              <p className="member">
                {/* Already a Member? <Link to="/login">Login</Link> */}.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreatePackage);

