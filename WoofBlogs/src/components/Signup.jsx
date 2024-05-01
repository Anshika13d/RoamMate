import React, { useState, useEffect } from 'react'

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//rrd
import { useNavigate, Link, NavLink } from 'react-router-dom'




function Signup() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    async function register(ev){
        ev.preventDefault();
        await fetch('http://localhost:4002/signup', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type' : 'application/json'}
        })
    }

  return (
    <>
    <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>SignUp</h1>
                    <br />
                    <Form onSubmit={register}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}} />
                        </Form.Group>
                        <Button style={{backgroundColor: 'green', borderColor:'green'}} type="submit">
                            Signup
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup