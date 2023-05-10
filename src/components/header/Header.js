import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <NavLink to="/" className="header__logo">Portfolio</NavLink>
                 <nav className="header__nav">
                    <NavLink to="/project" className="header__link">Проекты</NavLink>
                    <NavLink to="/contact" className="header__link">Контакты</NavLink>
                    <NavLink to="/about" className="header__link">О себе</NavLink>
                </nav> 
                <label id="switch" className="switch">
                    <input type="checkbox" id="slider"/> 
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    </header>

    )
}

export default Header