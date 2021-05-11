import React, { Component } from "react";
import { NameCard } from "./Doctorname-booking/NameCard";
import { Link } from "react-router-dom";
import "./homecontent.css";
import "tachyons";
import DatePicker from "react-datepicker";

import avatar from "../../assets/avatar.png";

export default class homeContent extends Component {
  constructor() {
    super();
    this.state = {
      image: avatar,
      name: " ",
      hospital: " ",
    };
  }

  changetitle = (name, work) => {
    this.setState({
      image: `https://joeschmoe.io/api/v1/${name}`,
      name: name,
      hospital: work,
    });
  };
  render() {
    const Drlisttest = [
      {
        id: 1,
        name: "Dr. ABC",
        work: "FUCKING HOSPITAL",
      },
      {
        id: 2,
        name: "Dr. XYZ",
        work: "ASSHOLE HOSPITAL",
      },
      {
        id: 3,
        name: "Dr. HELL",
        work: "SATANIC HOSPITAL",
      },
      {
        id: 4,
        name: "Dr. MF",
        work: "BENGALI HOSPITAL",
      },
      {
        id: 5,
        name: "Dr. DE",
        work: "JHAAR FOOK HOSPITAL",
      },
      {
        id: 6,
        name: "Dr. LOL",
        work: "DAWAKHANA HOSPITAL",
      },
    ];

    const elements = Drlisttest.map((drarraylist, i) => {
      return (
        <Link
          to="#"
          onClick={() => {
            this.changetitle(Drlisttest[i].name, Drlisttest[i].work);
          }}
        >
          <NameCard
            key={i}
            id={Drlisttest[i].id}
            name={Drlisttest[i].name}
            work={Drlisttest[i].work}
          />
        </Link>
      );
    });
    const newdate = new Date();
    return (
      <div className="mainpage flex flex-wrap bg-color-grey">
        <div className="row">
          <div className="col-md-9">
            <div className="container p-3 my-3 border tc">
              <h3>Select Your Doctor</h3>
              <div className="">{elements}</div>
            </div>
          </div>
          <div className="col-md-3 order-first order-md-last">
            <div className="container p-3 my-3 border tc">
              <img
                src={this.state.image}
                alt="FUCK_OFF_DINGUS"
                className="mt0 tc"
                style={{ width: "200px", height: "200px" }}
              />
              <h5 className="tc">Name: {this.state.name}</h5>
              <h5 className="tc">Hospital: {this.state.hospital}</h5>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                minDate={newdate}
                placeholderText="Select a day"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
