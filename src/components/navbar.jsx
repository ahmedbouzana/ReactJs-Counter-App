import React from "react";

//sfc
const NavBar = ({totalCounters}) => {
  return ( <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "} <span className="badge badge-pill badge-success">{totalCounters}</span>
        </a>
      </nav> );
}
 
export default NavBar;