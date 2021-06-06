import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Pages/Home";
import fire from "./config/fire";
import 'tachyons'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <Router>
        {this.state.user ? (
          <Home />
        ) : (
          <AppContainer className = "shadow-4-l">
            <AccountBox />
          </AppContainer>
        )}
        {/* <Route path="/" component={AccountBox} />
          </AppContainer> */}
      </Router>
    );
  }
}

export default App;
