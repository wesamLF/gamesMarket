import React, { useState } from 'react'
import "./nav.css"
import { NavLink } from "react-router-dom";
import Cart from '../Cart/Cart';
import RegisterBtns from '../RegisterBtns/RegisterBtns';

const Nav = () => {
    const [isActive, setIsActive] = useState(false)
    
    const navHandler = () => {
        setIsActive(prev => !prev)
    }

    return (
        <nav className="navbar dark--bg--color " role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>
                    <a onClick={navHandler} role="button" className={`navbar-burger light--text--color ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarMenu" className={`navbar-menu  dark--bg--color ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-end ">
                        <NavLink to={"./home"} className="navbar-item light--text--color ">
                            Home
                        </NavLink>
                        <NavLink to={"./market"} className="navbar-item light--text--color">
                            Market
                        </NavLink>
                        <NavLink to={"./aboutus"} className="navbar-item light--text--color">
                            About us
                        </NavLink>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item is-flex is-justify-content-space-between ">
                            <Cart />
                            <RegisterBtns />
                        </div>
                    </div>
                </div>
            </div>
        </nav>



    )
}

export default Nav