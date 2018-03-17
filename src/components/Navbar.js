import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo_knikni.svg'
import SocNav from "./SocNav";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/about" className="navbar-item" style={{ width: 140 }}>
          <figure className="image logo">
            <img
              src={logo}
              alt="Knikni design"
              style={{}}
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          О cтудии
        </Link>
        <Link className="navbar-item" to="/products">
          Портфолио
        </Link>
        <Link className="navbar-item" to="/blog">
          Блог
        </Link>
        <Link className="navbar-item" to="/products">
          Контакты
        </Link>
      </div>
      <div className="navbar-end">
        <SocNav />
        {/*<Link className="navbar-item" to="/products">*/}
          {/*Fb*/}
        {/*</Link>*/}
      </div>
    </div>
  </nav>
)

export default Navbar
