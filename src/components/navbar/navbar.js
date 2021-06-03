import React from 'react';
import {Navbar,Form, FormControl,Nav,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Login from '../auth/log'
import Signn from '../auth/Signn';
import "./navbar.css"


const Navbarr = ({profiles,input,handlChange}) => {
  
  const [isLogged,setIsLogged]=useState(false)
  const [inputSign,useInputSign]=useState({ namme:"",email:"",Password:"",ConfirmPassword:""})

  //handleChage
  const HandleSign = e => {
    const { name, value } = e.target;
    //e.target.name=e.target.value
    useInputSign({
      ...inputSign,
      [name]: value,
    
    });
   console.log("inputSign",inputSign)
   };

//SignUp
 const Signup = () => {
  if (/[a-z\s]*/gi.test(inputSign.namme)) {
    if (/[a-z]*@[a-z]*/g.test(inputSign.email)) {
      if (inputSign.Password ===inputSign.ConfirmPassword) {
        profiles.push({
          namme: inputSign.namme,
          email: inputSign.email,
          password: inputSign.Password,
        });
        localStorage.setItem("email", inputSign.email);
        localStorage.setItem("password", inputSign.Password);
       
        setIsLogged( true );
      } else {
        alert("password confirmation dont match");
      }
    } else {
      alert("Enter a valid email");
    }
  } else {
    alert("name should contain only alphabet");
  }
};

   //Login
  const Log = () => {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if (inputSign.email === email && inputSign.Password === password) {
      setIsLogged( true );
      alert("Welcome to Filmy");
    
    }
    else alert("you don't have an account")
  };
 //Logout
  const Logout = () => {
    setIsLogged( false );
  };
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
     <Nav.Link className="linkk  d-flex" href="#link"> 
     {/* <Login/> */}
    {
      isLogged?
      (
        <Button onClick={Logout}>LogOut</Button>
      ):
      (
       <div>
          <Login Log={Log} HandleSign={HandleSign}/>
        <Signn Signup={Signup} inputSign={inputSign} HandleSign={HandleSign}/>
       </div>
      )
    }
     
   </Nav.Link>
  {/*   Account <i className="far fa-user ml-2"></i> */}
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
      
    </div>
   )

 }

export default Navbarr