import React  from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/astrology" className="nav-link">
                  Astrology
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/vedicastro" className="nav-link">
                  VedicAstro
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/apireport" className="nav-link">
                  ApiReport
                </Link>
              </li>
            </ul>
        
        </div>
      </nav>
    );
  };
  


export default Navbar;