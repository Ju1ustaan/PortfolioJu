import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

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
                    <label id="switch" className="switch">
                        <input type="checkbox" id="slider" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </header>

    )
}

export default Header