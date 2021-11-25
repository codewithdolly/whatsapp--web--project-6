import React from 'react'
import{BrowserRouter as Router, Route, Link} from "react-router-dom";
import{Switch} from "react-router-dom"
import Home from "../Routing/Home"
import About from "../Routing/About"
import Services from "../Routing/Services"

const Routing = () => {
    return (
        <Router>
        <nav>
        <ul>
            <li>
                <Link to= "/">Home</Link>
            </li>
            <li>
                <Link to= "/about">About</Link>
            </li>
            <li>
                <Link to= "/services">Services</Link>
            </li>
        </ul>
        </nav>

        <Switch>
            <Route exact path="/">
                <Home /> 
            </Route>
            <Route exact path="/about" >
                <About />
            </Route>
            <Route exact path="/services">
                <Services />
            </Route>
        </Switch>
        </Router>
    )
}

export default Routing
