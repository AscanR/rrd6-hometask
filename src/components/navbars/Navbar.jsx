import React from 'react';
import {Link} from "react-router-dom";
import {useSwitch} from "../../hooks/SwitchNavbarLinks";

const Navbar = () => {
    const {switchHomePage, homePage} = useSwitch()
    return (
          <nav className="bg-primary navbar navbar-expand-lg">
              <div className="container-fluid">
                  <div className='navbar-brand fw-bold text-white'>
                      RRD 6 Example
                  </div>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          {!homePage &&
                                <li className="nav-item">
                                    <Link className="nav-link active text-white text-decoration-underline" aria-current="page" to='/' onClick={switchHomePage}>Home</Link>
                                </li>}
                          {homePage &&
                                <li className="nav-item">
                                    <Link className="nav-link active text-white text-decoration-underline" aria-current="page" to='/users' onClick={switchHomePage}>Users List</Link>
                                </li>}
                      </ul>
                  </div>
              </div>
          </nav>
    );
};

export default Navbar;