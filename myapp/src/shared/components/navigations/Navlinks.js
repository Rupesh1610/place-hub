import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css'

const Navlinks = (props) => {
    return (
        <ul className='nav-links'>
            <li><NavLink to='/'>ALL USERS</NavLink></li>
            <li><NavLink to='/u1/places'>MY PLACES</NavLink></li>
            <li><NavLink to='/places/new'>ADD PLACE</NavLink></li>
            <li><NavLink to='/auth'>AUTH</NavLink></li>
        </ul>
    );
}

export default Navlinks;
