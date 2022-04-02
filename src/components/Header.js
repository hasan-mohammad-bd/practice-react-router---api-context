import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <nav className='d-flex py-3 justify-content-center'>
                <Link to="/products">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About</Link>
                <Link to="/orders">Orders</Link>
            </nav>
        </div>
    );
};

export default Header;