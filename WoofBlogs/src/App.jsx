//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//components
import About from './components/About';
import Explore from './components/Explore';
import Home from './components/Home';
import ContactUs from './components/ContactUs';

//rrd 
import { Link, NavLink, Route, Routes } from 'react-router-dom';
// import MyState from './context/data/Mystate';

//toast
import { Toaster } from "react-hot-toast";

//react
import React, { useState } from 'react';

//images
import logo from './images/logo.png';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {


  return (
    // <MyState>
      <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#" style={{ fontSize: '30px' }}>
              <img
                src={logo}
                width="100"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                style={{ marginRight: '10px'}}
              />
              RoamMate 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/explore" className="nav-link">
                    Explore
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/ContactUs" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
                <NavDropdown title="More" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="Action">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </ul>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <li className="nav-item navbar-nav" >
                  <NavLink exact to="/login" className="nav-link">
                    Login
                  </NavLink>
                  <NavLink exact to="/signup" className="nav-link">
                    Sign up
                  </NavLink>
                </li>
                </Navbar.Text>
              </Navbar.Collapse>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
              
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
      </>
  );
}

export default App;
