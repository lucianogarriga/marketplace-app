import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 

const NavBar = () => {
  return (
    <Navbar bg="dark" variant={'dark'} expand="lg">
      <Container>
        <Navbar.Brand href="#home">NFT MARKET</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link> 
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#wallet">Connect Wallet</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavBar