import React from "react";
import Lottie from "lottie-react";
import HomeAnimation from "../../assets/Home-Animation.json";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="home_top-container">
        <div className="home-container">
          <div className="greeting">
            <p>hi! my name is </p>
          </div>
          <div className="name">
            <h1 className="full-name">
              <span className="first-name">Karthik</span>{" "}
              <span className="last-name">Sabareesh B</span>
            </h1>
          </div>
          <div className="description">
            <p>
            Building experiences at the intersection
              <br />
              of code and design
            </p>
          </div>
        </div>

        <div className="home_animation">
          {/* <Lottie animationData={HomeAnimation}/> */}
        </div>
      </div>
      <div className="moving-text">
        <div className="con">
          <h1>Front-End Web Developer</h1>
          <h1> </h1>
          <h1> Web Desginer </h1>
          <h1> </h1>
          <h1> Article Writer </h1>
        </div>
        <div className="con">
          <h1>Front-End Web Developer</h1>
          <h1> </h1>
          <h1> Web Desginer </h1>
          <h1> </h1>
          <h1> Article Writer </h1>
        </div>
        <div className="con">
          <h1>Front-End Web Developer</h1>
          <h1> </h1>
          <h1> Web Desginer </h1>
          <h1> </h1>
          <h1> Article Writer </h1>
        </div>
      </div>
      {/* <div id="blob1"></div>
            <div id="blob2"></div> */}
    </div>
  );
};

export default Home;
