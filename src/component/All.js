import React, { Component } from 'react'

import {Navbar,Container,Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Services from './Service/Services';

export default class All extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          
               <Nav.Link as={Link} to='/Home'>Home</Nav.Link> 
               <Nav.Link as={Link} to="/About">About</Nav.Link>
               <Nav.Link as={Link} to="/Services">Services</Nav.Link>
               <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
               <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Switch>
            
            <Route path="/About" component={About}/>
            
            <Route path="/Services" component={Services}/>
            <Route path="/Portfolio" component={Portfolio}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/" component={Home}/>
         
         
         </Switch>
      </Router>
    )
  }
}
