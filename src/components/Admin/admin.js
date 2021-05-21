import React from 'react'
import {Form,Button,Modal} from  'react-bootstrap'
import {useState,useEffect} from 'react';
import axios from 'axios';
const Admin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input,setInput]=useState(
    {
    title:"",desc:"",year:"",rating:'',image:'',type:''
}
);
//handleChage
const handleChange = e => {
  const { name, value } = e.target;
  //e.target.name=e.target.value
  setInput({
    ...input,
    [name]: value,
  
  });
 
};
   //post data 
   const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3007/posts",input)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
      console.log(`inpuuuuuuuuut`, input)
  }
  return(
    <div className='container mt-5'>
       <Button variant="primary" onClick={handleShow}>
        Add Film
      </Button>
     
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form onSubmit={handlesubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="title" name='title' onChange={handleChange}/>
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>description</Form.Label>
    <Form.Control type="text" placeholder="description"  name='desc'  onChange={handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label> Rating</Form.Label>
    <Form.Control type="text" placeholder="rating"  name='rating' onChange={handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" placeholder="image"  name='image' onChange={handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>type</Form.Label>
    <Form.Control type="text" placeholder="image"  name='type' onChange={handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>year</Form.Label>
    <Form.Control type="text" placeholder="image"  name='year' onChange={handleChange} />
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
   )

 }

export default Admin