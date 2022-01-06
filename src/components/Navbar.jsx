import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
      showButton()
  }, []);

  function handleClick() {
    setClick(!click);
  }

  function closeMobileMenu() {
    setClick(false);
  }

  function showButton (){
      if(window.innerWidth <= 960){
          setButton(false)
      } else {
          setButton(true);
      }
  };


  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/React-Travel-Demo-Website/" className="navbar-logo" onClick={closeMobileMenu}>
            <h4>XPL</h4><i className="fas fa-meteor"></i><h4>R</h4>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times icon-active" : "fas fa-bars bars-active"}
            ></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/React-Travel-Demo-Website/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link-mobile" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button  buttonStyle={`btn--bright`} type="/sign-up" children={"Sign Up"} />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
