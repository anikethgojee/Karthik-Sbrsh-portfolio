import React, { forwardRef } from "react";
import "./Profile.css";
import MyImg from "../../assets/MyImg.jpeg";
import MyResume from "../../assets/MyResume.pdf";
import Info from "../Profile/Info.jsx";

const Profile = (ref) => {
  return (
    <section className="section about" id="profile">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container profile_container grid">
        <img src={MyImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            I am a practiced{" "}
            <span className="skill_highlights">Front-End Web Developer</span>{" "}
            and <span className="skill_highlights">Web Designer</span> with
            expertise in HTML, CSS, JavaScript, React, and Node.js. As the{" "}
            <span className="skill_highlights">President of CBB at BVRITN</span>{" "}
            , I excel in leading and collaborating. My experience includes
            developing innovative solutions in competitive environments and
            delivering high-quality designs that enhance user experiences. With
            strong{" "}
            <span className="skill_highlights">communication skills</span> and a
            creative approach, I bring both technical proficiency and artistic
            vision to every project.
          </p>

          <div className="button">
            <h4>
              <a href={MyResume} download="" className="button--flex">
                Download Resume
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
