import React  from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item text-danger fw-bold">
                <Link to="/astrology" className="nav-link text-danger">
                  Astrology
                </Link>
              </li>
              <li className="nav-item text-danger fw-bold">
                <Link to="/vedicastro" className="nav-link text-danger">
                  VedicAstro
                </Link>
              </li>
              <li className="nav-item text-danger fw-bold">
                <Link to="/apireport" className="nav-link text-danger">
                  ApiReport
                </Link>
              </li>
            </ul>
        
        </div>
      </nav>
    );
  };
  


export default Navbar;