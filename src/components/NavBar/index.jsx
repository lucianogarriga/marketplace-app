import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navBar.css'

const NavBar = () => {
  return (
    <>    
    <Navbar bg="dark" variant={'dark'} sticky='top' expand="lg">
      <Container>
        <Navbar.Brand href="#home">NFT MARKET</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ textAlign: 'center' }}>
            <Link to="/">Home</Link> 
            <Link to="/about">About</Link>
            <Link to="/wallet">Connect Wallet</Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </> 
  );
}
 
export default NavBar