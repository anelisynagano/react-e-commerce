import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <div className='navOptions'>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/cart'><li>Cart</li></NavLink>
                </div>
                <div className='navPrice'>
                    <li>Total price: 0 Bottlecaps</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;