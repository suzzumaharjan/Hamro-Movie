import React from "react";

import { Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
            <div className="logo">
                <h1>Hamro movie</h1>
                
            </div>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/'>Genre</Link>
                <Link to="#">Country</Link>
                <Link to="#">Top</Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Enter keywords..."/>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
