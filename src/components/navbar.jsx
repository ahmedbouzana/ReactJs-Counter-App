import React, { Component } from "react";

//sfc
const NavBar = (props) => {
  return ( <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar{" "} <span className="badge badge-pill badge-success">{props.totalCounters}</span>
        </a>
      </nav> );
}
 
export default NavBar;