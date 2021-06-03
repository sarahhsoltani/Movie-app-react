import {Button,Modal,Form} from 'react-bootstrap'
import {useState} from 'react'
function Signn({inputSign,HandleSign,Signup}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
 

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Sign up
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name"  name="name" onChange={HandleSign}/>
  </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email"  onChange={HandleSign}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword"  >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="Password" onChange={HandleSign} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword" >
    <Form.Label> Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" name="ConfirmPassword" onChange={HandleSign} />
  </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={Signup}>
            Sign up
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Signn;