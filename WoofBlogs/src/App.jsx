<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> Stashed changes

function App() {
  let data = {
    
    dog1:{
      name:"dollar",
      img: "https://images.pexels.com/photos/8473445/pexels-photo-8473445.jpeg?auto=compress&cs=tinysrgb&w=800",
      age: 4,
      des:"This dog is the pet of ujjwal shrivastava"
    },

  }

  return (
    <>
<<<<<<< Updated upstream
      <h1>hello</h1>
=======
      <Home  data={data}/>
>>>>>>> Stashed changes
=======
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  
  return (
    <>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize: '30px'}}>WoofBlogs!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/explore" className="nav-link">Explore</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/ContactUs" className="nav-link">Contact Us</NavLink>
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
      <Route path='/ContactUs' element={<ContactUs />} />
    </Routes>
  
>>>>>>> Stashed changes
    </>
  )
}

export default App
