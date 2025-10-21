import React from "react";
import "./section1.css";

const Section1 = () => {
  return (
    <section className="section">
        <div className="box"></div>
      <div className="container pos">
        <h6 className="food">Food app</h6>
        <h1 className="why">Why stay hungry when you can order form Bella Onojie</h1>
        <p className="download">Download the bella onoje’s food app now on</p>
        <div className="buttons">
          <button className="btn">Play Store</button>
          <button className="btn1">App Store</button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
