import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <NavLink to='/' exact className='item'>
                Accordion
            </NavLink>
            <NavLink to='/list' className='item'>
                Search
            </NavLink>
            <NavLink to='/dropdown' className='item'>
                Dropdown
            </NavLink>
            <NavLink to='/translate' className='item'>
                Translate
            </NavLink>
        </div>
    )
};

export default Header;