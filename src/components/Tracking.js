import React from 'react'
import Buttons from './Button'
import "../css/tracking.css"

const Tracking = () => {
    return (
      <div>
        <div className="text-center my-5" id="tracking">
          <h3>Track your package here</h3>
          <form action="">
            <div class="wrap">
              <div class="search">
                <input
                  type="text"
                  class="searchTerm"
                  placeholder="Enter Tracking Number"
                ></input>
                {/* <button type="submit" class="searchButton">
                  <i class="fa fa-search"></i>
                </button> */}
                <Buttons myBtnClass="searchButton">
                  <i class="fa fa-search"></i>
                </Buttons>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}
 
export default Tracking;

