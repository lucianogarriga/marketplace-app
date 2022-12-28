import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import './navBar.css'

export const NavBar = () => {
  return (
    <>    
    <div>
    <Navbar bg="dark" variant={'dark'} sticky='top' expand="lg">
      <Container>
        <Navbar.Brand href="/">NFTravel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav__link'>Home</NavLink> 
            <NavLink to="/category/tickets" className='nav__link'>Tickets</NavLink>
            <NavLink to="/category/full" className='nav__link'>Full</NavLink>
            <NavLink to="cart" className='nav__link'>Cart<CartWidget/></NavLink> 
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