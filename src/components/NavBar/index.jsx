import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget';
import './navBar.css'

const NavBar = () => {
  return (
    <>    
    <Navbar bg="dark" variant={'dark'} sticky='top' expand="lg">
      <Container>
        <Navbar.Brand href="#home">ArgenTickets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link> 
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#cart" className='d-flex'>Cart<CartWidget/></Nav.Link> 
            {/* <Nav.Link href="#wallet" className='d-flex' > <Wallet/>Connect Wallet</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </> 
  );
}
 
export default NavBar