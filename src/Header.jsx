import React from 'react';
import './Header.css';

export default function HeaderNav() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="nav_button">Home</button>
                </li>
                <li className="nav-item">
                    <button className="nav_button">Music</button>
                </li>
                <li className="nav-item">
                    <button className="nav_button">About</button>
                </li>
            </ul>
        </nav>
    )
}
