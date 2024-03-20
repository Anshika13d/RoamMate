import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Home({data}) {
  
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/link" className="nav-link">Link</NavLink>
            </li>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Action">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <NavLink to="#" className="nav-link" disabled>Link</NavLink>
            </li>
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

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name } ({data.age})</Card.Title>
        <Card.Text>
          {data.des}
        </Card.Text>
        <Button variant="primary">Explore {data.name}</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default Home;
