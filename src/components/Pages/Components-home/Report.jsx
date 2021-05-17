import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import fire from "../../../config/fire";


export default class Report extends Component {
  constructor() {
    super();
    this.state = {
      date: null,
      report: null,
    };
  }
  addReport(date, report) {
    this.setState({
      date: date,
      report: report,
    });
  }
  render() {
    const Report = [
      {
        id: "121212321",
        name: "Dr. Bewafa",
        date: "12/10/2020",
        report: "Patient is COVID POSITIVE",
      },
      {
        id: "122111212",
        name: "Dr. Wahwahh",
        date: "12/10/2021",
        report: "Patient is COVID NEGATIVE",
      },
      {
        id: "121212112",
        name: "Dr. lalla",
        date: "12/10/2022",
        report: "Patient is STUPIDITY POSITIVE",
      },
    ];
    const reportdata = Report.map((data, i) => {
      return (
        <tr key={i}>
          <td>{Report[i].id}</td>
          <td>{Report[i].name}</td>
          <td>{Report[i].date}</td>
          <td>
            {" "}
            <Link
              to="#"
              onClick={() => this.addReport(Report[i].date, Report[i].report)}
            >
              <ArrowForwardIcon fontSize="large" />
            </Link>{" "}
          </td>
        </tr>
      );
    });
    return (
      <div
        className="mainpage flex  bg-color-grey row justify-content-center text-gray-100"
        style={{
          flex: 1,
          color: ''
        }}
      >
        <div
          className="docsec container p-3 my-3 tc br4  shadow-1 backdrop-filter backdrop-blur-lg"
          style={{
            flex: 0.4,
            margin: 5,
          }}
        >
          <h3 style={{ fontSize: 45 }}>Previous Reports</h3>
          <Table stripped bordered hover style={{ marginTop: 20, color: 'white' }}>
            <tr>
              <td>Booking Id</td>
              <td>Doctor's Name</td>
              <td>Date</td>
              <td>Select</td>
            </tr>
            {reportdata}
          </Table>
        </div>
        <div
          className="docsec container p-3 my-3 tc br4 shadow-1 backdrop-filter backdrop-blur-lg"
          style={{
            flex: 0.6,
            margin: 5,
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <h3 style={{ fontSize: 45 }}>Report</h3>
          <div className="dib row flex flex-wrap">
            <span>Name: {fire.auth().currentUser.displayName}</span>
            <span>Date: {this.state.date}</span>
          </div>
          <div
            className="container p-3 my-3 "
            style={{
              backgroundColor: 'lightgreen',
              textAlign: 'left'
            }}
          >

            <p className=" text-left text-black" >
              Dear {fire.auth().currentUser.displayName},<br />
              {this.state.report}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
