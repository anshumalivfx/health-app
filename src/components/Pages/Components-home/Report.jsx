import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import fire from "../../../config/fire";

export default class Report extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      date: null,
      report: null,
      doctors: [],
    };
  }
  addReport(name, date, report) {
    this.setState({
      name: name,
      date: date,
      report: `Dear ${fire.auth().currentUser.displayName}, ` + report,
    });
  }
  render() {
    fetch("/doctors")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ doctors: data });
      })
      .catch((err) => {
        console.error(err.toString());
      });
    const Report = this.state.doctors;
    const reportdata = Report.map((data, i) => {
      return (
        <tr key={i}>
          <td>{Report[i].uid}</td>
          <td>{Report[i].name}</td>
          <td>{Report[i].date}</td>
          <td>
            {" "}
            <Link
              to="#"
              onClick={() =>
                this.addReport(Report[i].name, Report[i].date, Report[i].report)
              }
            >
              <ArrowForwardIcon fontSize="large" />
            </Link>{" "}
          </td>
        </tr>
      );
    });
    return (
      <div
        className="mainpage flex  bg-color-grey row justify-content-center"
        style={{
          flex: 1,
          color: "",
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
          <Table stripped bordered hover style={{ marginTop: 20 }}>
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
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h3 style={{ fontSize: 45 }}>Report</h3>
          <div className="dib row flex flex-wrap">
            <span>Doctor's Name: {this.state.name}</span>
            <span>Patient's Name: {fire.auth().currentUser.displayName}</span>
            <span>Date: {this.state.date}</span>
          </div>
          <div
            className="container p-3 my-3 "
            style={{
              backgroundColor: "lightgreen",
              textAlign: "left",
            }}
          >
            <p className=" text-left text-black">
              {this.state.report}, <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
