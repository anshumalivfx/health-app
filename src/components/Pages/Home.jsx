import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import homeContent from "./Components-home/homeContent";
import Prescription from "./Components-home/Prescription";
import { Navbar } from "./Navbar";
import Report from "./Components-home/Report";
import "./Home.css";
import HomeforDoctor from "./HomeforDoctor";

function Home() {
  return (
    <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <Router>
        <Navbar />
         <Switch>
          <Route path="/homedoc" component={HomeforDoctor}/>
          <Route path="/report" component={Report} />
          <Route path="/presc" component={Prescription} />
          <Route path="/" component={homeContent} />
        </Switch>
      </Router>
    </>
  );
}

export default Home;
