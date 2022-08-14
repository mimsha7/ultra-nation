import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav><a href="/country">All Country</a>
            <a href="/review">Country Details</a>
            <a href="/manage">Manage Country</a>
            </nav>
        </div>
    );
};

export default Header;