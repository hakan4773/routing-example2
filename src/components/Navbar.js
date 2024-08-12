import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <nav>
        <div className='nav-items container'>
        <div className="logo"> 
        <h1>
       
        <NavLink to={"/Home"
        } end   className={({ isActive }) => (isActive ? 'active-link' : '')}> PRODUCT APP </NavLink>  

        </h1>
        </div>
      <ul>
        <li>
        <NavLink to="/Home" >Home</NavLink> 
            </li>
        <li>
        <NavLink to="/About" >About</NavLink> 
        </li>
        <li>
        <NavLink to="/Products" >Products</NavLink> 
        </li>
      </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
