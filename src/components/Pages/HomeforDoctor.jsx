import React, { Component } from "react";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Components-home/homecontent.css";
import "tachyons";

import avatar from "../assets/avatar.png";
import { Patientcard } from "./Doctor-side-component/Patientcard";
import { Card } from "./Doctor-side-component/Card";

export default class HomeforDoctor extends Component {
  constructor() {
    super();
    this.state = {
      image: avatar,
      name: "(Doctor's Name will appear here)",
      isPaneOpen: false,
    };
  }

  changetitle = (name) => {
    this.setState({
      image: `https://joeschmoe.io/api/v1/${name}`,
      name: name,
      isPaneOpen: true,
    });
  };
  render() {
    const patientlist = [
      {
        id: 1,
        name: "Anshumali Karna",
      },
      {
        id: 2,
        name: "Diwakar Paintola",
        
      },
      {
        id: 3,
        name: "Rohit Kumar",
        
      },
      {
        id: 4,
        name: "Anshul Negi",
        
      },
      {
        id: 5,
        name: "Yash Singh",
        
      },
      {
        id: 6,
        name: "Sunny Rai",
        
      },
      {
        id: 7,
        name: "Roshan Agarwal",
        
      },
      {
        id: 8,
        name: "Mridul Pandey",
        
      },
      
      {
        id: 11,
        name: "Rakesh Joshi",
      },
      {
        id: 12,
        name: "Ritesh Jha",
      },
      {
        id: 9,
        name: "Sohit Bisht",
      },
      {
        id: 10,
        name: "Anirudh Chauhan",
      },
    ];

    const elements = patientlist.map((data, i)=>{
      return(
        <Link
          to="#"
          onClick = {()=>{
            this.changetitle(
              patientlist[i].name
            );
          }
           
          }
          >
            <Patientcard
        key={i}
        name = {patientlist[i].name}
        />
          </Link>
        
      )
    })
    return (
      <div className="mainpage flex flex-wrap bg-color-grey row justify-content-center">
        <div
          className="docsec container p-3 my-3 tc br4 shadow-1 backdrop-filter backdrop-blur-lg	"
          style={{
            flex: 1,
          }}
        >
          <h1 className="tc" style={{ color: "white", fontSize: 60 }}>
            Select Your Patient
          </h1>

          <div className="">
            {elements}
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
          width="350px"
        >
          <div className="flex justify-around center">
            <Card
            image = {this.state.image}
            name = {this.state.name}
            />
          </div>
        </SlidingPane>
      </div>
    );
  }
}
