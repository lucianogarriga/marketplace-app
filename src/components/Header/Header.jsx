import React from 'react'
import './header.css'
import {Container} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

const NAV__LINKS = [
  {
    display: 'Home',
    url: '/home'
  },
  
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span> <i class="ri-fire-fill"></i> </span>
              NFTs
            </h2>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header