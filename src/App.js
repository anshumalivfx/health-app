import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import {  BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Pages/Home";
import fire from "./config/fire";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      }
      else {
        this.setState({user: null});
      }
    });
  }
  render() {
    return (
      
        <Router>
        
          {this.state.user ? (<Home/>) : (<AppContainer><AccountBox /></AppContainer>)}
             {/* <Route path="/" component={AccountBox} />
          </AppContainer> */}
      </Router>
      
    );
  }
}

export default App;
