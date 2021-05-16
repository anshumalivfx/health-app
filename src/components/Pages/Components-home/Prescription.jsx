import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "tachyons";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import fire from "../../../config/fire";

export default class Prescription extends Component {
  constructor() {
    super();
    this.state = {
      presvisible: null,
      date: "",
      medicines: []
    };
  }

  render() {
    const Prescription = [
      {
        id: "121212321",
        name: "Dr. Bewafa",
        date: "12/10/2020",
        medicines: [
          {
            no: 1,
            name: "Limcee",
            dose: "5",
            timings: "TTS",
          },
          {
            no: 2,
            name: "pop",
            dose: "4",
            timings: "TTS",
          },
          {
            no: 3,
            name: "Cap",
            dose: "2",
            timings: "TTS",
          },
          {
            no: 4,
            name: "Cap",
            dose: "2",
            timings: "TTS",
          },
        ],
      },
      {
        id: "122111212",
        name: "Dr. Wahwahh",
        date: "12/10/2021",
        medicines: [
          {
            no: 1,
            name: "COVAXIN",
            dose: "5",
            timings: "TTS",
          },
          {
            no: 2,
            name: "COVISHEILD",
            dose: "5",
            timings: "TTS",
          },
          {
            no: 3,
            name: "SPUTNIK V",
            dose: "5",
            timings: "TTS",
          },
        ],
      },
      {
        id: "121212112",
        name: "Dr. lalla",
        date: "12/10/2022",
        medicines: [
          {
            no: 1,
            name: "Jadibooty",
            dose: "5",
            timings: "TTS",
          },
          {
            no: 2,
            name: "FUCKING",
            dose: "5",
            timings: "TTS",
          },
          {
            no: 3,
            name: "LOLOL",
            dose: "5",
            timings: "TTS",
          },
        ],
      },
    ];

    const medicineslist = this.state.medicines.map((data, i) => {
      return(
        <tr key={i}>
          <td>{this.state.medicines[i].no}</td>
          <td>{this.state.medicines[i].name}</td>
          <td>{this.state.medicines[i].dose}</td>
          <td>{this.state.medicines[i].timings}</td>
        </tr>
      );
    })
    

    const presdata = Prescription.map((data, i) => {
      return (
        <tr key={i}>
          <td>{Prescription[i].id}</td>
          <td>{Prescription[i].name}</td>
          <td>{Prescription[i].date}</td>
          <td>
            {" "}
            <Link to="#">
              <ArrowForwardIcon
                fontSize="large"
                onClick={() => this.setState({ date: Prescription[i].date, medicines: Prescription[i].medicines })}
              />
            </Link>{" "}
          </td>
        </tr>
      );
    });
    return (
      <div className="mainpage flex  bg-color-grey row justify-content-center">
        <div
          className="docsec container p-3 my-3 tc br4 shadow-1"
          style={{
            flex: 0.4,
            margin: 5,
          }}
        >
          <h2 className="tc">Previous Bookings</h2>

          <Table stripped bordered hover style={{ marginTop: 20 }}>
            <tr>
              <td>Booking Id</td>
              <td>Doctor's Name</td>
              <td>Date</td>
              <td>Select</td>
            </tr>
            {presdata}
          </Table>
        </div>{" "}
        <div
          className="docsec container p-3 my-3 tc br4 shadow-1"
          style={{
            flex: 0.6,
            margin: 5,
          }}
        >
          <h2 className="tc">Your Prescription</h2>
          <div className="dib row flex flex-wrap">
            <span>Name: {fire.auth().currentUser.displayName}</span>
            <span>Date: {this.state.date}</span>
          </div>
          <p></p>
          <Table stripped bordered hover>
            <tr>
              <td>S.no</td>
              <td>Medicine</td>
              <td>Dose</td>
              <td>Timings</td>
            </tr>
            {medicineslist}
          </Table>
        </div>{" "}
      </div>
    );
  }
}
