import React, { useState } from 'react'

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//rrd
import { useNavigate, Link, NavLink } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(){
        e.preventDefault();
    }

  return (
    <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Login</h1>
                    <br />
                    <Form action='POST' >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
                        </Form.Group>
                        <Button style={{backgroundColor: 'green', borderColor:'green'}} type="submit" onClick={submit}>
                            Login
                        </Button>
                    </Form>
                    <br />
                    <p>Or</p>
                    <br />

                    <NavLink to='/signup'>Signup Page</NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login