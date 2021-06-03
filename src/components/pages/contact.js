import React from 'react'
import Navbarr from '../navbar/navbar'
import './pages.css'
import {Form ,Container} from 'react-bootstrap'
import Footer from '../footer/footer'
const Contact = () => {
  return(
    <div>
      <Navbarr/>
      <div>
        <div className="items pl-5 mt-5">
          <h6 className='pt-5 pb-3 question'>HAVE ANY QUESTIONS?</h6>
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
          <div className="col-md-6 col-12 mt-5">
            <div className='d-flex  mt-5 text-center'>
              
             <div  className='col-md-5'> <i className="material-icons sociaal">place</i></div>
            <div className='col-md-7  part '>
            <h4 className="para-contact add">Address </h4>  <br/>
           <p className="para-contact">	 342 Sloane St, London, W1D 3NE</p>
            </div>
             </div>
             {/* ------------- */}
             <div className='d-flex  mt-5 text-center'>
              
              <div  className='col-md-5'> <i class="material-icons sociaal">email</i></div>
             <div className='col-md-7  part '>
             <h4 className="para-contact add">Telephone </h4> 
           <p className="para-contact">+44 0330 123 4567</p>
             </div>
              </div>

           {/* ----------- */}
           <div className='d-flex  mt-5 text-center'>
              
              <div  className='col-md-5'> <i className="material-icons sociaal">phone in talk</i></div>
             <div className='col-md-7  part '>
             <h4 className="para-contact add">Telephone </h4> 
           <p className="para-contact">+44 0330 123 4567</p>
             </div>
              </div>
           {/* <div className='d-flex mt-5 text-center'>
          
              
              <p className="para-contact">Telephone </p> 
             <p className="para-contact">	+44 0330 123 4567</p>
             </div> */}
             {/* ---------------- */}
          </div>
        </div>
        </Container>
      </div>
      <Footer/>
    </div>
   )

 }
 

export default Contact