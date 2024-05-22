import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => 
{
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <Link class="navbar-brand mx-5 active" to={'/'}>Home</Link>
            <ul class="navbar-nav d-flex mx-4">
                <li class="nav-item">
                <Link class="nav-link" aria-current="page" to={'/login'}>Login</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/signup'>Signup</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;