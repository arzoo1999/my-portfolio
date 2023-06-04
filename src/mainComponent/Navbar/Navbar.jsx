import "./Navbar.scss";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navStyle">
      <div className="logoContainer">
        <div className="logo">BA</div>
      </div>
      <div className="navContentStyle">
        <div>
          <a href="/" className="navContent">
            Home
          </a>
        </div>
        <div>
          <a href="/about" className="navContent">
            About
          </a>
        </div>
        <div>
          <a href="/contact" className="navContent">
            Contact
          </a>
        </div>
        <div>
          <a href="/contact" className="navContent">
            Services
          </a>
        </div>
        <div>
          <a href="/contact" className="navContent">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
