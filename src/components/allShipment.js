import React, { Component } from 'react';
import { BaseUrl } from "../utils/baseUrl";
import axios from 'axios'

class allShipment extends Component {
    state = { 
        shipment: []
     }
async componentDidMount() {
        let url = `${BaseUrl}/shippings`;
         console.log(url);
         try {
               const shipment = await axios.get(url);
               this.setState({ shipment: shipment.data.docs });
         } catch (error) {
             
         }
  

    console.log("SHIPPMENTSSSS")
    console.log(this.state.shipment);


}



    render() { 
        return ( <div>

        </div> );
    }
}
 
export default allShipment;