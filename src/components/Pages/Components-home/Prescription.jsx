import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "tachyons";

export default class Prescription extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  onClick = () => {

  }
  render(){
    return (
      <div className="mainpage flex  bg-color-grey row justify-content-center">
        <div
          className="docsec container p-3 my-3 tc br4 shadow-1"
          style={{
            flex: 0.4,
            margin: 5,
          }}
        >
          <h2 className="tc">
            Previous Bookings
          </h2>
         
          <Table stripped bordered hover style={{marginTop: 20}} >
            <tr>
              <td className="hover-bg-light-blue" onClick={()=>this.onClick} >Booking 1</td>
            </tr>
            <tr>
              <td className="hover-bg-light-blue">Booking 2</td>
            </tr>
            <tr>
              <td className="hover-bg-light-blue">Booking 3</td>
            </tr>
          </Table>
         
          
        </div>{" "}
        <div
          className="docsec container p-3 my-3 tc br4 shadow-1"
          style={{
            flex: 0.6,
            margin: 5,
          }}
        >
          <h2 className="tc" >
            Your Prescription
          </h2>
        </div>{" "}
      </div>
    );
  }
  
};
