import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { homeContent } from './Components-home/homeContent';
import { Prescription } from './Components-home/Prescription';
import { Navbar } from './Navbar'
// Hell yaa Here's Your fucking component professor hope you rot
function Home() {
    return (
        <>
        <Router>
            <Navbar />
            
                <Switch>
                    <Route path="/presc" component={Prescription} />
                    <Route path="/home" component={homeContent} />
                </Switch>
            </Router>
        </>
    )
}

export default Home
