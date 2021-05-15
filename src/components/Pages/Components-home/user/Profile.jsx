import React, { Component } from "react";
import "tachyons";
import fire from "../../../../config/fire";
import avatar from "../../../assets/avatar.png";

import SlidingPane from "react-sliding-pane";

import "react-sliding-pane/dist/react-sliding-pane.css";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isPaneOpen: false,
    };
  }

  render() {
    return (
      <div
        className="mainpage flex flex-wrap bg-color-grey row justify-content-center shadow-1 br4 tc"
        style={{ marginTop: 20, maxWidth: 700 }}
      >
        <img src={avatar} alt="FUCK" style={{ width: 300, height: 300 }} />
        <span>Name: {fire.auth().currentUser.displayName}</span>
        <span>Email: {fire.auth().currentUser.email}</span>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => this.setState({ isPaneOpen: true })}
          >
            Change Email/Password
          </button>
        </div>

        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          onRequestClose={(e) => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
          width="500px"
        >
          <div>
            <h3>Change Email</h3>

            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="New Email"
              id="newemail"
            />

            <input
              type="password"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter Password"
              id="currentpasswordforemail"
            />

            <button type="button" class="btn btn-primary">
              Change Email
            </button>
          </div>
        </SlidingPane>
        <span>Your Bookings: </span>
      </div>
    );
  }
}
