import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import homeContent from "./Components-home/homeContent";
import { Prescription } from "./Components-home/Prescription";
import { Navbar } from "./Navbar";
import { AnimatedSwitch } from "react-router-transition";

function Home() {
  return (
    <>
      <Router>
        <Navbar />

        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/presc" component={Prescription} />
          <Route path="/" component={homeContent} />
        </AnimatedSwitch>
      </Router>
    </>
  );
}

export default Home;
