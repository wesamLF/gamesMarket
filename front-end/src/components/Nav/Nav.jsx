import React, { useState } from 'react'
import "./nav.css"
import { NavLink } from "react-router-dom";
import Cart from '../Cart/Cart';
import RegisterBtns from '../RegisterBtns/RegisterBtns';
import { GitHub } from "@material-ui/icons"

const Nav = () => {
    const [isActive, setIsActive] = useState(false)

    const navHandler = () => {
        setIsActive(prev => !prev)
    }

    return (
        <nav className="navbar  is-mobile  dark--bg--color p-2" role="navigation" aria-label="main navigation ">
            <div className="container">
                <div className="navbar-brand">
                    <img src="../assets/images/WeeGames2.png" style={{ height: "50px", width: "150px" }} />

                    <a onClick={navHandler} role="button" className={`navbar-burger light--text--color ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarMenu" className={`navbar-menu  dark--bg--color ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-end ">
                        <NavLink to={"./home"} className="navbar-item light--text--color ms-1 ">
                            Home
                        </NavLink>
                        <NavLink to={"./market"} className="navbar-item light--text--color ms-1">
                            Market
                        </NavLink>
                        <NavLink to={"./aboutus"} className="navbar-item light--text--color ms-1">
                            About us
                        </NavLink>
                    </div>

                    <div className="navbar-end ">
                        <div className="columns m-0 navbar-item ">
                            <div className="column  is-flex is-justify-content-center ">
                                <a href="https://github.com/wesamLF/wee-reviews" target="_blank"
                                    className=' is-flex is-justify-content-center is-align-content-center pr-5 '>
                                    <GitHub className='has-text-white ' />
                                </a>
                                <div className=" is-flex is-justify-content-center is-align-content-center  ">

                                    <Cart />
                                </div>
                            </div>
                            <div className="column is-flex is-justify-content-space-between">

                                <RegisterBtns />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>



    )
}

export default Nav