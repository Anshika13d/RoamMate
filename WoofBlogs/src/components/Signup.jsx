import React, { useState, useEffect } from 'react'

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//rrd
import { useNavigate, Link, NavLink } from 'react-router-dom'

import axios from "axios";


function Signup() {

    const[username, setusername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

   async function register(ev){
        ev.preventDefault();
        try{
            await axios.post('/signup', {
                username,
                email,
                password
            });
            alert('Registered!')
        }catch(e){
            alert('Registration failed. Please try again later')
        }
    }

  return (
    <>
    <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 style={{textAlign:'center'}}>SignUp</h1>
                    <br />
                    <Form onSubmit={register}>
                    <Form.Group className="mb-3" controlId="formBasicUsername" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="John Doe" 
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                 />
                            
                        </Form.Group>
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
                        <Button className="w-100" variant="success" type="submit">
                            Sign up
                        </Button>
                        <p>Already have an account?   
                    <NavLink to='/login' style={{color: 'black', }}>Login</NavLink>
                        
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup