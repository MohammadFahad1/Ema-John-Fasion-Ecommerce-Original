import React from 'react';
import './Header.css';
import logo from './../../logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className="container flex-center">
                <img src={logo} alt="" />
                <nav className="nav">
                    <a href="/home">Home</a>
                    <a href="/Store">Store</a>
                    <a href="/Products">Products</a>
                    <a href="/about">About</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;