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
      type: "{Doctor Type will appear here}",
      isPaneOpen: false,
    };
  }

  changetitle = (name, work, type) => {
    this.setState({
      image: `https://joeschmoe.io/api/v1/${name}`,
      name: name,
      hospital: work,
      type: type,
      isPaneOpen: true,
    });
  };
  render() {
    const Drlisttest = [
      {
        id: 1,
        name: "Dr. Raja Iyer",
        work: "FUCKING HOSPITAL",
        type: "Phyician",
      },
      {
        id: 2,
        name: "Dr. XYZ",
        work: "ASSHOLE HOSPITAL",
        type: "Cardiologist",
      },
      {
        id: 3,
        name: "Dr. HELL",
        work: "SATANIC HOSPITAL",
        type: "Probably Blood Test",
      },
      {
        id: 4,
        name: "Dr. MF",
        work: "BENGALI HOSPITAL",
        type: "Bengali Ilaj",
      },
      {
        id: 5,
        name: "Dr. DE",
        work: "JHAAR FOOK HOSPITAL",
        type: "Scary Things",
      },
      {
        id: 6,
        name: "Dr. Lala",
        work: "DAWAKHANA HOSPITAL",
        type: "Khandani Ilaaj",
      },
      {
        id: 7,
        name: "Dr. HAHA",
        work: "TANTRIK HOSPITAL",
        type: "Tantra Mantra Aghori Lmao",
      },
      {
        id: 8,
        name: "Dr. Sanjeev Murthy",
        work: "fortis",
        type: "Child Specialist"
      }
    ];
    const elements = Drlisttest.map((drarraylist, i) => {
      return (
        <Link
          to="#"
          onClick={() => {
            this.changetitle(
              Drlisttest[i].name,
              Drlisttest[i].work,
              Drlisttest[i].type
            );
          }}
        >
          <NameCard
            key={i}
            id={Drlisttest[i].id}
            name={Drlisttest[i].name}
            work={Drlisttest[i].work}
            type={Drlisttest[i].type}
          />
        </Link>
      );
    });

    return (
      <div className="mainpage flex flex-wrap bg-color-grey row justify-content-center">
        <div
          className="docsec container p-3 my-3 tc br4 shadow-1"
          style={{
            flex: 1,
          }}
        >
          <h1 className="tc" style={{ color: "white", fontSize: 60 }}>
            Select Your Doctor
          </h1>

          <div className="">{elements}</div>
        </div>
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          onRequestClose={(e) => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
          width="350px"
        >
          <div className="flex justify-around center">
            <Doctordetails
              image={this.state.image}
              name={this.state.name}
              work={this.state.hospital}
              type={this.state.type}
            />
          </div>
        </SlidingPane>
      </div>
    );
  }
}
