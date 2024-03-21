import React from 'react';
import Form from 'react-bootstrap/Form';
import pup from '../images/confused-pup.png';
import { useForm, ValidationError } from '@formspree/react';

function ContactUs() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="d-flex align-items-center"> 
            <h1 className='mt-5 mr-3'>Any Queries?</h1> 
            <img src={pup} className='w-25' alt="Confused Pup" /> 
          </div>
          <Form className="mt-5" action='https://formspree.io/f/xbjnapgn' method='POST'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label style={{fontSize: '20px'}} >Name</Form.Label>
              <Form.Control type="text" placeholder="name" name='name' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontSize: '30px'}}>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{fontSize: '30px'}}>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} name='text_area' />
            </Form.Group>
            <input type='submit' value='send' />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
