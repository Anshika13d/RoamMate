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
import Home from './components/Home'
import ContactUs from './components/ContactUs';

//rrd
import { NavLink, Route, Routes } from 'react-router-dom';
import MyState from './context/data/Mystate';

//toast
import { Toaster } from "react-hot-toast";

//react
import React from 'react';
import { useEffect, useState } from 'react';

//images
import logo from './images/logo.png';


function App() {
  
  return (
    <MyState>

    <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#" style={{fontSize: '30px'}}>
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{marginRight: '10px'}}
            />
              WoofBlogs!</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                <li className="nav-item">
                  <NavLink exact="true" to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact="true" to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact="true" to="/explore" className="nav-link">Explore</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact="true" to="/ContactUs" className="nav-link">Contact Us</NavLink>
                </li>
                <NavDropdown title="More" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="Action">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                
              </ul>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
      <Toaster />
    </MyState>
  )
}

export default App
