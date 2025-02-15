import React, { useState } from "react";
import "./Education.css";
import Coursera1 from "../../assets/Coursera1.pdf";
import Alpha from "../../assets/Alpha.pdf";
import PIJ from "../../assets/PIJ.pdf";
import PIP from "../../assets/PIP.pdf";
import IITB from "../../assets/IITB.png";
import ICCPCT from "../../assets/Best_Paper_Cert.pdf";
import Yukthi from "../../assets/Yukthi_Winners.pdf";

const Education = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="edu" id="education">
      <h2 className="section__title">Profile</h2>
      <span className="section__subtitle">My Academic & Professional journey</span>

      <div className="qualification_container qcontainer">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualificaiton__active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <span>Education</span>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualificaiton__active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <span>Certifications</span>
          </div>

          <div
            className={
              toggleState === 3
                ? "qualification_button qualificaiton__active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <span>Accomplishments</span>
          </div>
        </div>

        <div className="edu_container">
          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Computer Science Engineering
                  </h3>
                  <span className="qualification__subtitle">
                    B V Raju Institute of Technology, Narsapur
                  </span>
                  <div className="qualification__calender">2022 - Present</div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Intermediate - MPC</h3>
                  <span className="qualification__subtitle">
                    Narayana Junior College, Kukatpally
                  </span>
                  <div className="qualification__calender">2020 - 2022</div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Metriculation</h3>
                  <span className="qualification__subtitle">
                    Narayana E-Techno Schools, JNTU
                  </span>
                  <div className="qualification__calender">2017 - 2020</div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Supervised Machine Learning
                  </h3>
                  <span className="qualification__subtitle">Coursera</span>
                  <div className="qualification__calender qualification__calender__hover">
                    <a href={Coursera1} download="">
                      Certificate
                    </a>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">DSA with Java</h3>
                  <span className="qualification__subtitle">Apna College</span>
                  <div className="qualification__calender qualification__calender__hover">
                    <a href={Alpha} download="">
                      Certificate
                    </a>
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Programming in Java</h3>
                  <span className="qualification__subtitle">NPTEL</span>
                  <div className="qualification__calender qualification__calender__hover">
                    <a href={PIJ} download="">
                      Certificate
                    </a>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Programming & DS in Python
                  </h3>
                  <span className="qualification__subtitle">NPTEL</span>
                  <div className="qualification__calender qualification__calender__hover">
                    <a href={PIP} download="">
                      Certificate
                    </a>
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Machine Learning Workshop
                  </h3>
                  <span className="qualification__subtitle">
                    Techfest - IIT Bombay
                  </span>
                  <div className="qualification__calender qualification__calender__hover">
                    <a href={IITB} download="">
                      Certificate
                    </a>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 3
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Best Paper Award</h3>
                  <span className="qualification__subtitle">ICCPCT 2024</span>
                  <div className="qualification__calender">
                    <a href={ICCPCT} download="">
                      Certificate
                    </a>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    1st Position in Hackathon
                  </h3>
                  <span className="qualification__subtitle">
                    Yukthi 2k23, BVRIT
                  </span>
                  <div className="qualification__calender">
                    <a href={Yukthi} download="">
                      Certificate
                    </a>
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    SIH Qualified College Level
                  </h3>
                  <span className="qualification__subtitle">
                    Smart India Hackathon
                  </span>
                  <div className="qualification__calender">2023</div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
              </div>

              {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UI UX Enthusiast</h3>
                                <span className="qualification__subtitle">
                                    Self Prep Techs</span>
                                <div className="qualification__calender">
                                    2022 - 2023
                                </div>
                            </div>

                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
