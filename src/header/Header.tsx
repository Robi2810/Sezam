import React from 'react';
import './Header.css';
import logo from './hse.svg'

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Company Logo" className="logo"/>
            <div className="name">SD</div>
        </header>
    );
}

export default Header;