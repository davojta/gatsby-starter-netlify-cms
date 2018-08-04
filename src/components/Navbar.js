import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo_knikni.svg'
import SocNav from "./SocNav";

class Navbar extends React.Component {

    constructor() {
        super();
        this.state = { isBurgerActive: false }
    }

    render() {
        return (<nav className="navbar is-transparent">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/about" className="navbar-item navbar-logo">
                        <figure className="image logo">
                            <img
                                src={logo}
                                alt="Knikni design"
                                style={{}}
                            />
                        </figure>
                    </Link>
                    <a role="button" className={`navbar-burger ${this.state.isBurgerActive ? 'is-active' : ''}`} ariaLabel="menu" onClick={()=> this.setState({isBurgerActive: !this.state.isBurgerActive})} ariaExpanded="false">
                        <span ariaHidden="true"></span>
                        <span ariaHidden="true"></span>
                        <span ariaHidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${this.state.isBurgerActive ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/about" onClick={()=> this.setState({isBurgerActive: !this.state.isBurgerActive})}>
                            О cтудии
                        </Link>
                        <Link className="navbar-item" to="/products" onClick={()=> this.setState({isBurgerActive: !this.state.isBurgerActive})}>
                            Портфолио
                        </Link>
                        <Link className="navbar-item" to="/blog" onClick={()=> this.setState({isBurgerActive: !this.state.isBurgerActive})}>
                            Блог
                        </Link>
                        <Link className="navbar-item" to="/contacts" onClick={()=> this.setState({isBurgerActive: !this.state.isBurgerActive})}>
                            Контакты
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <SocNav/>
                        {/*<Link className="navbar-item" to="/products">*/}
                        {/*Fb*/}
                        {/*</Link>*/}
                    </div>
                </div>

            </div>
        </nav>)
    }
}

export default Navbar
