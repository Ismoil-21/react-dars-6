import React from "react";
import "./header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <img width={180} src={logo} alt="" />

            <div className="links">
              <a href="" className="link">
                Home
              </a>
              <a href="" className="link">
                Product
              </a>
              <a href="" className="link">
                Faq
              </a>
              <a href="" className="link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
