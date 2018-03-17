import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo_knikni.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" style={{ width: 140 }}>
          <figure className="image logo">
            <img
              src={logo}
              alt="Kaldi"
              style={{ width: '165px', height: '165px' }}
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          О нас
        </Link>
        <Link className="navbar-item" to="/products">
          Портфолио
        </Link>
        <Link className="navbar-item" to="/products">
          Блог
        </Link>
        <Link className="navbar-item" to="/products">
          Контакты
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/products">
          Fb
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
