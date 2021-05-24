import React from 'react'
import axios from 'axios';
import {Form,Button,Modal} from  'react-bootstrap'
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Rater from 'react-rater'
import Update from './update';

const AddMovies = ({film,title,search,handleChange}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  //   const [showw, setShoww] = useState(false);
  // const handleCloose = () => setShoww(false);
  // const handleShoww = () => setShoww(true);
  const [input,setInput]=useState( { title:"",desc:"",year:"",rating:'',image:'',type:''});
  // const [update,setupdate]=useState( { title:el.title,desc:el.desc,year:el.year,rating:el.rating,image:el.image,type:el.type});

  //handleChage
  const handleMOvie = e => {
    const { name, value } = e.target;
    //e.target.name=e.target.value
    setInput({
      ...input,
      [name]: value,
    
    });
   
   };
  // const handleChangee = e => {
  //   const { name, value } = e.target;
  //   //e.target.name=e.target.value
  //   setupdate({
  //     ...update,
  //     [name]: value,
    
  //   });
  //   console.log(`mansourrr`,update )
  // };
     //post data 
     const handlesubmit = () => {
    
      axios
        .post("http://localhost:3007/posts",input)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
       
    }
//      //Get movies
//    const getFilm=()=> {
//     axios.get("http://localhost:3007/posts").then((response) => {
    
//       setFilm(response.data);
//       console.log(`ziedaa`, film)
//     });
//   } 
//   useEffect(()=> {getFilm()
//     console.log(`ziedaa`, film)

//   },[])
  //delete movies
  const deleteMovie=(id)=> {
    axios.delete(`http://localhost:3007/posts/${id}`)
    .then(response => {
        console.log("response: hahaha", response);
      })
    .catch(err=> 
      console.log(err)
    );
  }

  //Update movies

// const updateMovies=(id)=> {
       
//         axios.put(`http://localhost:3007/posts/${id}`, update)
//         .then(response => {
//           setupdate( response.data);})
//     }
//     console.log(`updaaaaaate`, update)

//     useEffect(()=> {updateMovies()
//     },[]   )
  return(

<div class="dark-edition">
<div class="wrapper ">
<div className="sidebar" data-color="purple" data-background-color="black" >

<div className="logo">
<img src="./image/logo.png" alt="..." className="logo-dash mb-5"/>
</div>
<div className="sidebar-wrapper mt-5">
<ul className="nav">
<li className="nav-item   ">
<Link className="nav-link" to='/admin'>
   <i className="material-icons">dashboard</i>
   <p>Dashboard</p>
</Link>
</li>
<li className="nav-item ">
  <a className="nav-link" href="./user.html">
    <i className="material-icons">person</i>
    <p>User Profile</p>
  </a>
</li>
<li className="nav-item active">
  <a className="nav-link" to="/addMovies">
    <i className="material-icons">content_paste</i>
    <p>Movie List</p>
  </a>
</li>



<li className="nav-item ">
  <Link className="nav-link" to='/notification'>
    <i className="material-icons">notifications</i>
    <p>Notifications</p>
  </Link>
</li>

</ul>
</div>
</div>
<div className="main-panel">

<nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top " id="navigation-example">
<div className="container-fluid">
<div className="navbar-wrapper">
  <a className="navbar-brand" href="javascript:void(0)">Movie List</a>
</div>
<button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation" data-target="#navigation-example">
  <span className="sr-only">Toggle navigation</span>
  <span className="navbar-toggler-icon icon-bar"></span>
  <span className="navbar-toggler-icon icon-bar"></span>
  <span className="navbar-toggler-icon icon-bar"></span>
</button>
<div className="collapse navbar-collapse justify-content-end">
  <form className="navbar-form">
    <div className="input-group no-border">
      <input type="text" className="form-control"  onChange={handleChange} placeholder="Search..."/>
      <button type="submit" className="btn btn-default btn-round btn-just-icon">
        <i className="material-icons">search</i>
        <div className="ripple-container"></div>
      </button>
    </div>
  </form>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="javascript:void(0)">
        <i className="material-icons">dashboard</i>
        <p className="d-lg-none d-md-block">
          Stats
        </p>
      </a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" href="javscript:void(0)" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="material-icons">notifications</i>
        <span className="notification">5</span>
        <p className="d-lg-none d-md-block">
          Some Actions
        </p>
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="javascript:void(0)">Mike John responded to your email</a>
        <a className="dropdown-item" href="javascript:void(0)">You have 5 new tasks</a>
        <a className="dropdown-item" href="javascript:void(0)">You're now friend with Andrew</a>
        <a className="dropdown-item" href="javascript:void(0)">Another Notification</a>
        <a className="dropdown-item" href="javascript:void(0)">Another One</a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="">
        <i className="material-icons">person</i>
        <p className="d-lg-none d-md-block">
          Account
        </p>
      </a>
    </li>
  </ul>
</div>
</div>
</nav>

    <div>
          <div className='container mt-5'>
       <Button variant="primary" onClick={handleShow}>
         Add Film
      </Button>
     
 <Modal show={show} onHide={handleClose}>
 <Modal.Header closeButton>
   <Modal.Title className="title-modal">Add Film</Modal.Title>
 </Modal.Header>
 <Modal.Body>
 <Form onSubmit={handlesubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="title" name='title' onChange={handleMOvie}/>
  
  </Form.Group>

   <Form.Group controlId="formBasicPassword">
    <Form.Label>description</Form.Label>
     <Form.Control type="text" placeholder="enter description"  name='desc'  onChange={handleMOvie} />
   </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label> Rating</Form.Label>
         <Form.Control type="text" placeholder="enter rating"  name='rating' onChange={handleMOvie} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" placeholder="enter image"  name='image' onChange={handleMOvie} />
  </Form.Group>
   <Form.Group controlId="formBasicPassword">
    <Form.Label>type</Form.Label>
     <Form.Control type="text" placeholder="enter image"  name='type' onChange={handleMOvie} />
   </Form.Group>
   <Form.Group controlId="formBasicPassword">
     <Form.Label>year</Form.Label>
     <Form.Control type="text" placeholder="enter year"  name='year' onChange={handleMOvie} />
   </Form.Group>
  <Button variant="secondary" onClick={handleClose}>
     Close
   </Button>
   <Button type='submit' variant="primary" onClick={handleClose}>
     Save Changes
   </Button>
 </Form>
 </Modal.Body>

 

 </Modal>
     </div>
     </div>
 <div className='container'>
 <div className="row">

{  film.filter(el=>
        el.title.toLowerCase().includes(search.toLowerCase())
        ).map(el=>
   
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <div className="card" >
            <Link to={"/details" + el.id}>
            <img src={el.image} className="card-img-top w-100 h-100" alt="..."/>
             </Link>
         <div className="card-body ">
         <p className="card-text title-film">{el.title} </p>
         <div className="d-flex justify-content-around">
         <p className="card-text text-center ">{el.year}</p>
         <p className="type-film">{el.type}</p>
         <p><i class="fas fa-play-circle"></i></p>
         
         </div>
         <Rater total={5} rating={el.rating} interactive={false}  />
      
      </div>
     <div className="d-flex justify-content-around"> 
     <p><i className="fas fa-trash remove " onClick={()=>deleteMovie(el.id)}></i></p>
       
       <Update el={el} />
        {/* <p> <i className="fas fa-pen-square edit "  onClick={handleShoww}></i></p> 


      <Modal show={showw} onHide={handleCloose}>
        <Modal.Header closeButton>
          <Modal.Title>Put film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
  <Form.Group controlId="formBasic">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder=" enter title" name='title'  defaultValue={el.title} onChange={handleChangee}/>
  
  </Form.Group>

   <Form.Group controlId="formBasicssword">
    <Form.Label>description</Form.Label>
     <Form.Control type="text" placeholder="enter description"   defaultValue={el.desc} name='desc'  onChange={handleChangee} />
   </Form.Group>
  <Form.Group controlId="formBasicPword">
    <Form.Label> Rating</Form.Label>
         <Form.Control type="text" placeholder="enter rating"  defaultValue={el.rating} name='rating' onChange={handleChangee} />
  </Form.Group>
  <Form.Group controlId="formBasicPasrd">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" placeholder="enter image"  defaultValue={el.image}  name='image'  onChange={handleChangee}/>
  </Form.Group>
   <Form.Group controlId="formBasicPasswordd">
    <Form.Label>type</Form.Label>
     <Form.Control type="text" placeholder="entedr type" defaultValue={el.type}  name='type'  onChange={handleChangee} />
   </Form.Group>
   <Form.Group controlId="formBasicPassworrd">
     <Form.Label>year</Form.Label>
     <Form.Control type="text" placeholder="enter year" defaultValue={el.year}  name='year'  onChange={handleChangee} />
   </Form.Group>

 </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleCloose}>
     Close
   </Button>
   <Button type='submit' variant="primary"  onClick={()=>updateMovies(el.id)}
   >
     Save Changes
   </Button>
        </Modal.Footer>
      </Modal> */}
     </div>
      </div> 
        </div>
       )
}
</div>
 </div>
</div>
</div>




</div>
   )

 }

export default AddMovies