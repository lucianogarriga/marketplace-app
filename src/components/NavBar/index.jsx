import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import './navBar.css'

export const NavBar = () => {
  return (
    <>    
    <div>
    <Navbar bg="dark" variant={'dark'} sticky='top' expand="lg">
      <Container>
        <Navbar.Brand href="#home">NFTravel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='link'>Home</Link> 
            <Link to="/about" className='link'>About</Link>
            <Link to="cart" className='link'>Cart<CartWidget/></Link> 
            {/* <Nav.Link href="#wallet" className='d-flex' > <Wallet/>Connect Wallet</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </> 
  );
}
 
export default NavBar