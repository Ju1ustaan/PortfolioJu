import React from 'react'
import { NavLink } from 'react-router-dom'
import BtnDarkmode from '../btnDarkMode/BtnDarkmode'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <nav className="header__nav-media">
                        <input type="checkbox" id="menu-toggle" />
                        <label id="trigger" for="menu-toggle"></label>
                        <label id="burger" for="menu-toggle"></label>
                        <ul id="menu" className='menu'>
                            <li><NavLink className="header__link-media" to="/project">Проекты</NavLink></li>
                            <li><NavLink className="header__link-media" to="/contact">Контакты</NavLink></li>
                            <li><NavLink className="header__link-media" to="/about">О себе</NavLink></li>
                        </ul>
                    </nav>
                    <NavLink to="/" className="header__logo">Portfolio</NavLink>
                    <nav className="header__nav">
                        <NavLink to="/project" className="header__link">Проекты</NavLink>
                        <NavLink to="/contact" className="header__link">Контакты</NavLink>
                        <NavLink to="/about" className="header__link">О себе</NavLink>
                    </nav>

                    <BtnDarkmode />
                    
                </div>
            </div>
        </header>

    )
}

export default Header