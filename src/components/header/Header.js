import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (

        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <NavLink to="/" className="header__title">Portfolio</NavLink>
                    <div className="header__nav">
                        <NavLink to="/" className="header__link">home</NavLink>
                        <NavLink to="/project" className="header__link">projects</NavLink>
                        <NavLink to="/contact" className="header__link">contact</NavLink>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header