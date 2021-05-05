import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { homeContent } from './Components-home/homeContent';
import { About } from './Components-home/About';
import { Navbar } from './Navbar'
// Hell yaa Here's Your fucking component professor hope you rot
function Home() {
    return (
        <>
        <Router>
            <Navbar />
            
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/home" component={homeContent} />
                </Switch>
            </Router>
        </>
    )
}

export default Home
