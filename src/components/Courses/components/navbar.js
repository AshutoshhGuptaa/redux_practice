import React from 'react';
import {Button, Navbar, Nav, FormControl, Form, Container, NavDropdown } from 'react-bootstrap';
import { Link , NavLink } from 'react-router-dom';

function Navbaar() {
  return <div>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">WELCOME</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink to ='/' className='nav-link'>Home</NavLink>
        <Nav.Link href="#action2">View Courses</Nav.Link>
        <NavDropdown title="Action" id="navbarScrollingDropdown">
        <NavDropdown.Item ><NavLink to='/addcourse' className='nav-link'> Add Course</NavLink></NavDropdown.Item >
          <NavDropdown.Item >Delete Course</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Update Course
          </NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      {/* <Form className="d-flex">
        <FormControl
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
  </div>;
}

export default Navbaar;
