import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Pages/Home";
import fire from "./config/fire";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, ); */
  background-image: radial-gradient(circle, #5c0067 0%, #00d4ff 100%);

    background-size: 400% 400%;

    -o-animation: AnimationName 6s ease infinite;
    animation: AnimationName 6s ease infinite;


@-o-keyframes AnimationName {
    0%{background-position:70% 0%}
    50%{background-position:31% 100%}
    100%{background-position:70% 0%}
}
@keyframes AnimationName {
    0%{background-position:70% 0%}
    50%{background-position:31% 100%}
    100%{background-position:70% 0%}
}
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
          <AppContainer>
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
