import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import React, { useState, Nav } from "react";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar' >
        <div className='nav-container container'>
          <NavLink exact to='/' className='nav-logo'>
            Recruitee
            <i className='fa fa-code'></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/about'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Jobs
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/blog'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Become Recuiter
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/contact'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
               Profile
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
