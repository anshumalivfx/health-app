import React, { Component } from "react";
import { NameCard } from "./Doctorname-booking/NameCard";
import { Doctordetails } from "./Doctorname-booking/Doctordetails";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./homecontent.css";
import "tachyons";

import avatar from "../../assets/avatar.png";

export default class homeContent extends Component {
  constructor() {
    super();
    this.state = {
      image: avatar,
      name: "(Doctor's Name will appear here)",
      hospital: "(Hospital's Name will appear here)",
      isPaneOpen: false,
    };
  }

  changetitle = (name, work) => {
    this.setState({
      image: `https://joeschmoe.io/api/v1/${name}`,
      name: name,
      hospital: work,
      isPaneOpen: true,
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
    return (
      <div className="mainpage flex flex-wrap bg-color-grey row justify-content-center">
        <div className="row">
          <div className="col-md-9">
            <div
              className="docsec container p-3 my-3 border tc"
              style={{ backgroundColor: "#D6D8D6" }}
            >
              <h3>Select Your Doctor</h3>
              <div className="">{elements}</div>
            </div>
          </div>
          <SlidingPane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={this.state.isPaneOpen}
            onRequestClose={(e) => {
              // triggered on "<" on left top click or on outside click
              this.setState({ isPaneOpen: false });
            }}

        width="400px"
          >
            <div className='flex justify-around'>
                
              <Doctordetails
                image={this.state.image}
                name={this.state.name}
                work={this.state.hospital}
                />
                </div>
          </SlidingPane>
        </div>
      </div>
    );
  }
}
