import React from 'react';
import {Navbar,Form, FormControl,Nav} from 'react-bootstrap'

import "./navbar.css"

const Navbarr = () => {
  return(
    <div className="navs">
        
        <Navbar  expand="lg">
  <Navbar.Brand href="#home" ><img className="logo" src="./image/logo.png" alt="..."/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Form inline>
      <FormControl className="input-search" type="text" placeholder="Type movie or tv show name to find it"  />
     <button className="btnn search btn-red"> <i class="fas fa-search"></i></button>
    </Form>
    <Nav  >
    <Nav.Link  className="linkk pr-3 pl-2 ml-3" href="#linkp">Home</Nav.Link>
      <Nav.Link className="linkk pr-3 "  href="#homep">Favorites movies</Nav.Link>
      <Nav.Link  className="linkk pr-3 " href="#linkp">tips</Nav.Link>
      <Nav.Link  className="linkk" href="#linkp">Contact</Nav.Link>
     
     <Nav.Link  className="linkk notifcation mt-1" href="#link"><i class="far fa-bell"></i><sup>2</sup></Nav.Link>
     <Nav.Link className="linkk " href="#link"> Account <i class="far fa-user ml-2"></i></Nav.Link>
  
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
      
    </div>
   )

 }

export default Navbarr