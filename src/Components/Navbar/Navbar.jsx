import React from "react";
import "./Navbar.css";
import Headroom from "react-headroom";

const Navbar = () => {
  return (
    <Headroom className="navbar_headroom">
      <nav className="navbar">
        <div className="leftNav">
          <h1 className="logo">
            <a href="#home">Sbrsh.</a>
          </h1>
        </div>
        <div className="rightNav">
          <h4
            onClick={() => {
              const element = document.getElementById("home");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <a>Home</a>
          </h4>
          <h4
            onClick={() => {
              const element = document.getElementById("profile");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <a>About Me</a>
          </h4>
          <h4
            onClick={() => {
              const element = document.getElementById("education");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <a>Profile</a>
          </h4>
          <h4
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <a>Projects</a>
          </h4>
          <h4
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <a>Contact Me</a>
          </h4>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
