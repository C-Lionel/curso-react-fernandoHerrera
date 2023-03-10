import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>

          <Link exact to='/' className='navbar-brand'> useContext </Link>

        <div className='collapse navbar-collapse' id='navbarNav'>

            <div className='navbar-nav'>
                <NavLink  exact className='nav-item nav-link' to='/'> Home </NavLink>
                <NavLink  exact className='nav-item nav-link' to='/login'> Login </NavLink>
                <NavLink  exact className='nav-item nav-link' to='/about'> About </NavLink>
                
            </div>

        </div>

    </nav>
  )
}
