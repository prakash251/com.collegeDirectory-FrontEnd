import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <div className='navbar'>
    <nav>
    <NavLink to="/collectcollge" className="nav-link">collectColleges</NavLink>
    <NavLink to="/addcollege"   className="nav-link">AddColleges</NavLink>
    </nav>
  
</div>
  );
};

export default Navbar;
