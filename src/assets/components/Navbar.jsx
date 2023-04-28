import React from "react";
import { Link } from "react-router-dom";
import image from "../images/image";
function Navbar(props) {
  //Navbar COntroller
  const collapseHandler = () => {
    const navToggler = document.querySelector(".nav-toggler");
    const navMenu = document.querySelector(".site-navbar ul");
    navToggler.classList.toggle("toggler-open");
    navMenu.classList.toggle("open");
  };
  //Navbar menu click
  const navMenuHandler = () => {
    const navToggler = document.querySelector(".nav-toggler");
    const navMenu = document.querySelector(".site-navbar ul");
    if (navMenu.classList.contains("open")) {
      navToggler.click();
    }
  };

  return (
    <div className="navbar-area py-1">
      <div className="container">
        <nav className="site-navbar">
          {/* site logo */}
          <Link to="#home" className="site-logo">
            <img src={image.logo} style={{ width: "100px" }} />
          </Link>
          {/* site menu/nav */}
          <ul>
            <li onClick={navMenuHandler}>
              <Link to="/" className="btn-12 me-1">
                home
              </Link>
            </li>
            <li onClick={navMenuHandler}>
              <Link to="/foods" className="btn-12 me-1">
                our foods
              </Link>
            </li>
            <li onClick={navMenuHandler}>
              <Link to="#" className="btn-12 me-1">
                service
              </Link>
            </li>
            <li onClick={navMenuHandler}>
              <Link to="#" className="btn-12 me-1">
                contact
              </Link>
            </li>
          </ul>
          {/* nav-toggler for mobile version only */}
          <button className="nav-toggler" onClick={collapseHandler}>
            <span />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
