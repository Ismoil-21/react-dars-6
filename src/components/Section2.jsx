import React from "react";
import "./section2.css";
import telefonlar from "../assets/telefonlar.png";
import telefon1 from "../assets/telefon1.png";
import telefon2 from "../assets/telefon2.png";
import telefon3 from "../assets/telefon3.png";

const Section2 = () => {
  return (
    <section>
      <div className="container">
        <div className="telefon">
          <img src={telefonlar} alt="" />
        </div>
        <h1 className="how">How the app works</h1>
        <div className="card">
          <img width={500} src={telefon1} alt="" />
          <div className="textlar">
            <h3 className="create">Create an account</h3>
            <h1 className="account">
              Create/login to an existing account to get started
            </h1>
            <p className="password">
              An account is created with your email and a desired password
            </p>
          </div>
        </div>

        <div className="cards">
          <div className="textlar">
            <h3 className="create">Explore varieties</h3>
            <h1 className="account">
              Shop for your favorites meal as e dey hot.
            </h1>
            <p className="password">
              Shop for your favorite meals or drinks and enjoy while doing it.
            </p>
          </div>
          <img width={500} src={telefon2} alt="" />
        </div>

        <div className="card">
          <img width={500} src={telefon3} alt="" />
          <div className="textlar">
            <h3 className="create">Checkout</h3>
            <h1 className="account">
              When you done check out and get it delivered.{" "}
            </h1>
            <p className="password">
              When you done check out and get it delivered with ease.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
