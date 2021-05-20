import React from 'react';
import {Navbar,Form, FormControl,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import "./navbar.css"

const Navbarr = ({input,handlChange}) => {
  return(
    <div className="navs">
        
        <Navbar  expand="lg" fixed="top"  className="navs ">
  <Navbar.Brand href="#home" ><Link to="/"><img className="logo" src="./image/logo.png" alt="..."/></Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Form inline>
      <FormControl onChange={handlChange} className="input-search" type="text" placeholder="Type movie or tv show name to find it"  />
     <button className="btnn search btn-red"> <i className="fas fa-search"></i></button>
    </Form>
    <Nav>
  
      <Link className="linkk ml-3  mt-3 pr-3 "  to="/favorites">Favorites movies</Link>
      <Link  className="linkk   mt-3 pr-3 " to="/tips">Tv Shows</Link>
      <Link  className="linkk   mt-3 " to="/contact">Contact</Link>
     
     <Nav.Link  className="linkk notifcation mt-1" href="#link"><i class="far fa-bell"></i><sup>2</sup></Nav.Link>
     <Nav.Link className="linkk " href="#link"> Account <i className="far fa-user ml-2"></i></Nav.Link>
  
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
      
    </div>
   )

 }

export default Navbarr