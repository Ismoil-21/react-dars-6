import React from "react";
import "./footer.css";
import internet from "../assets/internet.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="rassmlar">
          <div className="ras">
            <img width={200} src={logo} alt="" />
          </div>
          <div className="rass">
            <img width={150} src={internet} alt="" />
          </div>
          <a className="href" href="">
            Copywright 2020 Bella Onoje.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
