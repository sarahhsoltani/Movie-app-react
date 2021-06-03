import React from 'react'
import Navbarr from '../navbar/navbar'
import './pages.css'
import {Form ,Container} from 'react-bootstrap'
const Contact = () => {
  return(
    <div>
      <Navbarr/>
      <div>
        <div className="items pl-5 mt-5">
          <h6 className='pt-5 pb-3'>HAVE ANY QUESTIONS?</h6>
          <h2>Please contact us</h2>
        </div>
        <Container>
        <div className="row">
          <div className="col-md-6 col-12">
          <Form>
            <h2>SEND A MESSAGE</h2>
           <Form.Group>
           <Form.Label className='label '>NAME *</Form.Label>
             <Form.Control size="lg"  type="text"  />
             <Form.Label className='label'>EMAIL *</Form.Label>
              <Form.Control size="lg"  type="text"  />
              <Form.Label className='label'>WHERE DID YOU HEAR ABOUT US?</Form.Label>
              <Form.Control  size="lg" type="text" />
             
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className='label'>MESSAGE *</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          </div>
          <div className="col-md-6 col-12">
            <div className='row'>
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </div>
   )

 }
 

export default Contact