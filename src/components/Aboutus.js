import React from 'react';
import "../css/App.css";
const Team = () => {
    return (
      <div>
        <div className="container-fluid mt-5" id="service">
          <div className="row">
            <div className="col-md-12 m-auto text-center">
              <h1 className="title-heading">Our Competencies</h1>
            </div>
          </div>
          <div className="container p-5">
            <div className="row m-5">
              <div className="col-md-4">
                <h2 className="title-heading">Process</h2>
                <p className="text-p mt-4">
                  Our processes have been defined by the process objective for
                  the company which is to have 100% accountability for all
                  customers' packages, 98% error free invoicing on express and
                  100% error free invoicing for logistics and freight
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="title-heading">Prompt</h2>
                <p className="text-p mt-4">
                  We offer you attention to detail, efficiency and prompt
                  deliveries. Swift delivering of parcels and other services to
                  customers. we can ensure flexibility and reliability whatever
                  your requirements.
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="title-heading">
                  Large and Heavy parcel Delivery
                </h2>
                <p className="text-p mt-4">
                  ProDelivery courier offers unbeatable prices for large and
                  heavy parcel.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="container p-5">
            <div className="row m-5">
              <div className="col-md-4">
                <h2 className="title-heading">Responsiveness</h2>
                <p className="text-p mt-4">
                  We will at any time know what the customers' changing needs
                  are and deliver on the customers' needs within the shortest
                  possible time. This is our promise
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="title-heading">Security</h2>
                <p className="text-p mt-4">
                  We will ensure 100% accountability, transparency and security
                  for all clients’ packages.
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="title-heading">Sustainability </h2>
                <p className="text-p mt-4">
                  Achieve your sustainability goals with help from us
                  and practices created with our promise to efficiency and
                  environmental responsibility in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Team;