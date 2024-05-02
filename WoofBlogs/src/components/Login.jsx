import React, { useState } from 'react'

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//rrd
import { useNavigate, Link, NavLink } from 'react-router-dom'

import axios from "axios";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post('/login', {email, password})
            alert('logged in!')
        }catch(e){
            alert('login failed')
        }
    }

  return (
    <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 style={{textAlign:'center'}}>Login</h1>
                    <br />
                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}} />
                        </Form.Group>
                        <Button className="w-100" variant="success" type="submit">
                            Login
                        </Button>
                    </Form>
                    <br />
                    <p>Don't have an account?   
                    <NavLink to='/signup' style={{color: 'black', }}> Signup Now</NavLink>
                        
                        </p>
                    <br />

                    
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Login