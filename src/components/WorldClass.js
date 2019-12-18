import React from 'react';
import "../css/App.css";
// import "../css/animate.css";

const WorldClass = () => {
    return (
      <div>
        <div className="container-fluid mt-5" id="aboutus">
          <div className="row">
            <div className="col-md-12 m-auto text-center">
              <h1 className="title-heading-comp">
                <span className="rel">RELIABLY</span> WORLD CLASS SHIPPING
              </h1>

              <div className="container prag">
                <p className="title-heading-prag">
                  Confidential, Personal and Professional freights anything can
                  be delivered with at most care. Once registered stay focused
                  on your work, because reliability is our ideal.
                </p>
              </div>
            </div>
          </div>
          <div className="container p-5">
            <div className="row m-5">
              <div className="col-md-4 ">
                {/* <h2 className="title-heading">Process</h2> */}
                <p className="text-p mt-4 imgs">
                  Domestic <br />
                  ........
                </p>
              </div>
              <div className="col-md-4 ">
                {/* <h2 className="title-heading">Prompt</h2> */}
                <p className="text-p mt-4 imgs">
                  Ecommerce
                  <br />
                  ........
                </p>
              </div>
              <div className="col-md-4">
                {/* <h2 className="title-heading">
                  Large and Heavy parcel Delivery
                </h2> */}
                <p className="text-p mt-4 imgs">
                  International
                  <br />
                  ........
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default WorldClass;