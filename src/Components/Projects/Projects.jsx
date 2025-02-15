import React, { useState } from "react";
import "./Projects.css";
import img from "../../assets/test.png";
import gemini from "../../assets/Gemini_Clone.png";
import medium_article from "../../assets/Medium_Article.svg";
import twogood from "../../assets/TooGoodCo..png";
import kisansathi from "../../assets/KisanSathi.png";
import soulease from "../../assets/SoulEase.jpeg";

const Projects = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [windowState, setWindowState] = useState(0);

  const toggleWindow = (index1) => {
    setWindowState(index1);
  };

  return (
    <div className="projects_main_container" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My works</span>

      <div className="project_container">
        <div className="project_tabs">
          {/* <div
            className={
              toggleState === 1
                ? "project_button project__active button--flex"
                : "project_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <span>All</span>
          </div> */}

          <div
            className={
              toggleState === 2
                ? "project_button project__active button--flex"
                : "project_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <span>Web Dev</span>
          </div>

          <div
            className={
              toggleState === 3
                ? "project_button project__active button--flex"
                : "project_button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <span>ML</span>
          </div>

          <div
            className={
              toggleState === 4
                ? "project_button project__active button--flex"
                : "project_button button--flex"
            }
            onClick={() => toggleTab(4)}
          >
            <span>Articles</span>
          </div>
        </div>

        <div className="project_sections">
          {/* <div
            className={
              toggleState === 1
                ? "project__content project__content-active "
                : "project__content"
            }
          >
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">Kisan Sathi</h3>
                  <span className="project_tag">ML</span>
                </div>
                <p className="project_subtitle">
                  A group project developed for a hackathon using HTML, CSS, JS,
                  Flask, and a machine learning classification model. We won
                  first prize!
                </p>
              </div>
              <img className="medium_img" src={kisansathi} alt="image" />
              <div className="project_data_links">
                <button className="see_more" onClick={() => toggleWindow(4)}>
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a
                    href="https://karthiksbrshb.github.io/KisanSathi/"
                    target="_blank"
                  >
                    Link
                  </a>
                </button>
              </div>
              <div
                className={
                  windowState === 4
                    ? "projects_modal active-modal"
                    : "projects_modal"
                }
              >
                <div className="projects_modal-content">
                  <div className="projects_modal-header">
                    <h3 className="project_modal-title">Kisan Sathi</h3>
                    <i
                      class="uil uil-multiply projects_modal-close"
                      onClick={() => toggleWindow(0)}
                    ></i>
                  </div>
                  <span className="project_modal-subtitle">
                    Hackathon Project
                  </span>
                  <p className="projects_modal-description">
                    Kisan Sathi is a group project that we developed for a
                    hackathon using HTML, CSS, JS, Flask, and a machine learning
                    classification model. The project focuses on helping farmers
                    make data-driven decisions through machine learning. We won
                    first prize for our efforts.
                  </p>
                  <h3 className="projects_modal-points-title">
                    Highlights include:
                  </h3>
                  <ul className="projects_modal-points">
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Developed a classification model to assist farmers in
                        crop selection.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Integrated APIs for real-time data and predictions.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Created an easy-to-use interface with HTML, CSS, and
                        JavaScript.
                      </p>
                    </li>
                  </ul>
                  <p className="projects_modal-info-description">
                    This project is a great example of how machine learning can
                    be used to make a positive impact on real-world problems,
                    specifically in agriculture.
                  </p>

                  <div className="projects_modal-see_project_div">
                    <button className="see_project">
                      <a
                        href="https://karthiksbrshb.github.io/KisanSathi/"
                        target="_blank"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">Google's Gemini Clone</h3>
                  <span className="project_tag">Web Dev</span>
                </div>
                <p className="project_subtitle">
                  A personal project where I built a Gemini clone using React
                  and the Gemini API.
                </p>
              </div>
              <img className="medium_img" src={gemini} alt="image" />
              <div className="project_data_links">
                <button className="see_more" onClick={() => toggleWindow(2)}>
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a
                    href="https://karthiksbrshb.github.io/gemini-clone/"
                    target="_blank"
                  >
                    Link
                  </a>
                </button>
              </div>
              <div
                className={
                  windowState === 2
                    ? "projects_modal active-modal"
                    : "projects_modal"
                }
              >
                <div className="projects_modal-content">
                  <div className="projects_modal-header">
                    <h3 className="project_modal-title">
                      Google's Gemini Clone
                    </h3>
                    <i
                      class="uil uil-multiply projects_modal-close"
                      onClick={() => toggleWindow(0)}
                    ></i>
                  </div>
                  <span className="project_modal-subtitle">
                    Personal Project
                  </span>
                  <p className="projects_modal-description">
                    A personal project where I used React and integrated
                    Google's Gemini API to create a fully functional Gemini
                    clone. This project showcases my skills in modern web
                    development and API integration.
                  </p>
                  <h3 className="projects_modal-points-title">
                    Highlights include:
                  </h3>
                  <ul className="projects_modal-points">
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Implemented React components for seamless UI.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Utilized the Gemini API for data retrieval and
                        integration.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Focused on responsive design and user experience.
                      </p>
                    </li>
                  </ul>
                  <p className="projects_modal-info-description">
                    This project is perfect for anyone looking to explore how
                    modern web technologies can be combined with API
                    integrations to create powerful web applications.
                  </p>

                  <div className="projects_modal-see_project_div">
                    <button className="see_project">
                      <a
                        href="https://karthiksbrshb.github.io/gemini-clone/"
                        target="_blank"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">TwoGoodCo. Clone</h3>
                  <span className="project_tag">Web Dev</span>
                </div>
                <p className="project_subtitle">
                  A personal project where I built a TwoGoodCo. clone using
                  HTML, CSS, and CSS motion animations powered by GSAP and
                  Scroll triggers.
                </p>
              </div>
              <img className="medium_img" src={twogood} alt="image" />
              <div className="project_data_links">
                <button className="see_more" onClick={() => toggleWindow(3)}>
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a
                    href="https://karthiksbrshb.github.io/TwoGoodCo./"
                    target="_blank"
                  >
                    Link
                  </a>
                </button>
              </div>
              <div
                className={
                  windowState === 3
                    ? "projects_modal active-modal"
                    : "projects_modal"
                }
              >
                <div className="projects_modal-content">
                  <div className="projects_modal-header">
                    <h3 className="project_modal-title">TwoGoodCo. Clone</h3>
                    <i
                      class="uil uil-multiply projects_modal-close"
                      onClick={() => toggleWindow(0)}
                    ></i>
                  </div>
                  <span className="project_modal-subtitle">
                    Personal Project
                  </span>
                  <p className="projects_modal-description">
                    A personal project where I recreated the TwoGoodCo. website
                    using HTML, CSS, and advanced motion animations powered by
                    GSAP and Scroll triggers. This project demonstrates my
                    ability to create visually engaging and interactive
                    websites.
                  </p>
                  <h3 className="projects_modal-points-title">
                    Highlights include:
                  </h3>
                  <ul className="projects_modal-points">
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Implemented CSS animations for a dynamic user
                        experience.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Used GSAP and Scroll triggers to create smooth
                        transitions and animations.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Focused on pixel-perfect design and responsive layouts.
                      </p>
                    </li>
                  </ul>
                  <p className="projects_modal-info-description">
                    This project is ideal for anyone interested in creating
                    visually appealing websites with advanced animations and
                    interactions.
                  </p>

                  <div className="projects_modal-see_project_div">
                    <button className="see_project">
                      <a
                        href="https://karthiksbrshb.github.io/TwoGoodCo./"
                        target="_blank"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">Tuning for Trouble</h3>
                  <span className="project_tag">Article</span>
                </div>
                <p className="project_subtitle">
                  We trust AI to be fair, but what if the secret recipe to
                  making it smarter is actually making it biased?
                </p>
              </div>
              <img className="medium_img" src={medium_article} alt="image" />
              <div className="project_data_links">
                <button className="see_more" onClick={() => toggleWindow(1)}>
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a
                    href="https://medium.com/@karthiksbrsh/tuning-for-trouble-how-hyperparameters-can-amplify-bias-49ece55c6f32"
                    target="_blank"
                  >
                    Link
                  </a>
                </button>
              </div>
              <div
                className={
                  windowState === 1
                    ? "projects_modal active-modal"
                    : "projects_modal"
                }
              >
                <div className="projects_modal-content">
                  <div className="projects_modal-header">
                    <h3 className="project_modal-title">Tuning for Trouble</h3>
                    <i
                      class="uil uil-multiply projects_modal-close"
                      onClick={() => toggleWindow(0)}
                    ></i>
                  </div>
                  <span className="project_modal-subtitle">Medium Article</span>
                  <p className="projects_modal-description">
                    We trust AI to be fair, but what if the secret recipe to
                    making it smarter is actually making it biased? In this
                    piece, I explore how hyperparameters, the seemingly
                    technical details behind AI models, can unintentionally
                    introduce or amplify bias.
                  </p>
                  <h3 className="projects_modal-points-title">
                    Highlights include:
                  </h3>
                  <ul className="projects_modal-points">
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        How hyperparameters influence the behavior AI systems.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        The silent but significant impact of bias in AI
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Practical strategies to mitigate bias and build fairer
                        AI systems
                      </p>
                    </li>
                  </ul>
                  <p className="projects_modal-info-description">
                    This article is a must-read for anyone interested in AI
                    ethics, machine learning, and the future of technology.
                    Whether you're a tech enthusiast, a data scientist, or just
                    curious about how AI works, there's something here for you!
                  </p>

                  <div className="projects_modal-see_project_div">
                    <button className="see_project">
                      <a
                        href="https://medium.com/@karthiksbrsh/tuning-for-trouble-how-hyperparameters-can-amplify-bias-49ece55c6f32"
                        target="_blank"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">Google Gemini Clone</h3>
                  <span className="project_tag">Web Dev</span>
                </div>
                <p className="project_subtitle">
                  I have cloned the infamous Google Gemini's web page. I have
                  used the free access to Gemini API provided by Google itself.
                </p>
              </div>
              <img src={img} alt="image" />
              <div className="project_data_links">
                <button className="see_more">
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a>Link</a>
                </button>
              </div>
            </div>
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">Google Gemini Clone</h3>
                  <span className="project_tag">Web Dev</span>
                </div>
                <p className="project_subtitle">
                  I have cloned the infamous Google Gemini's web page. I have
                  used the free access to Gemini API provided by Google itself.
                </p>
              </div>
              <img src={img} alt="image" />
              <div className="project_data_links">
                <button className="see_more">
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a>Link</a>
                </button>
              </div>
            </div>
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">Google Gemini Clone</h3>
                  <span className="project_tag">Web Dev</span>
                </div>
                <p className="project_subtitle">
                  I have cloned the infamous Google Gemini's web page. I have
                  used the free access to Gemini API provided by Google itself.
                </p>
              </div>
              <img src={img} alt="image" />
              <div className="project_data_links">
                <button className="see_more">
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a>Link</a>
                </button>
              </div>
            </div>
          </div> */}

          <div
            className={
              toggleState === 2
                ? "project__content project__content-active"
                : "project__content"
            }
          >
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">Google's Gemini Clone</h3>
                  <span className="project_tag">Personal Project</span>
                </div>
                <p className="project_subtitle">
                  A personal project where I built a Gemini clone using React
                  and the Gemini API.
                </p>
              </div>
              <img className="medium_img" src={gemini} alt="image" />
              <div className="project_data_links">
                <button className="see_more" onClick={() => toggleWindow(2)}>
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a
                    href="https://karthiksbrshb.github.io/gemini-clone/"
                    target="_blank"
                  >
                    Link
                  </a>
                </button>
              </div>
              <div
                className={
                  windowState === 2
                    ? "projects_modal active-modal"
                    : "projects_modal"
                }
              >
                <div className="projects_modal-content">
                  <div className="projects_modal-header">
                    <h3 className="project_modal-title">
                      Google's Gemini Clone
                    </h3>
                    <i
                      class="uil uil-multiply projects_modal-close"
                      onClick={() => toggleWindow(0)}
                    ></i>
                  </div>
                  <span className="project_modal-subtitle">
                    Personal Project
                  </span>
                  <p className="projects_modal-description">
                    A personal project where I used React and integrated
                    Google's Gemini API to create a fully functional Gemini
                    clone. This project showcases my skills in modern web
                    development and API integration.
                  </p>
                  <h3 className="projects_modal-points-title">
                    Highlights include:
                  </h3>
                  <ul className="projects_modal-points">
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Implemented React components for seamless UI.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Utilized the Gemini API for data retrieval and
                        integration.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Focused on responsive design and user experience.
                      </p>
                    </li>
                  </ul>
                  <p className="projects_modal-info-description">
                    This project is perfect for anyone looking to explore how
                    modern web technologies can be combined with API
                    integrations to create powerful web applications.
                  </p>

                  <div className="projects_modal-see_project_div">
                    <button className="see_project">
                      <a
                        href="https://karthiksbrshb.github.io/gemini-clone/"
                        target="_blank"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">TwoGoodCo. Clone</h3>
                  <span className="project_tag">Personal Project</span>
                </div>
                <p className="project_subtitle">
                  A personal project where I built a TwoGoodCo. clone using
                  HTML, CSS, and CSS motion animations powered by GSAP and
                  Scroll triggers.
                </p>
              </div>
              <img className="medium_img" src={twogood} alt="image" />
              <div className="project_data_links">
                <button className="see_more" onClick={() => toggleWindow(3)}>
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a
                    href="https://karthiksbrshb.github.io/TwoGoodCo./"
                    target="_blank"
                  >
                    Link
                  </a>
                </button>
              </div>
              <div
                className={
                  windowState === 3
                    ? "projects_modal active-modal"
                    : "projects_modal"
                }
              >
                <div className="projects_modal-content">
                  <div className="projects_modal-header">
                    <h3 className="project_modal-title">TwoGoodCo. Clone</h3>
                    <i
                      class="uil uil-multiply projects_modal-close"
                      onClick={() => toggleWindow(0)}
                    ></i>
                  </div>
                  <span className="project_modal-subtitle">
                    Personal Project
                  </span>
                  <p className="projects_modal-description">
                    A personal project where I recreated the TwoGoodCo. website
                    using HTML, CSS, and advanced motion animations powered by
                    GSAP and Scroll triggers. This project demonstrates my
                    ability to create visually engaging and interactive
                    websites.
                  </p>
                  <h3 className="projects_modal-points-title">
                    Highlights include:
                  </h3>
                  <ul className="projects_modal-points">
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Implemented CSS animations for a dynamic user
                        experience.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Used GSAP and Scroll triggers to create smooth
                        transitions and animations.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Focused on pixel-perfect design and responsive layouts.
                      </p>
                    </li>
                  </ul>
                  <p className="projects_modal-info-description">
                    This project is ideal for anyone interested in creating
                    visually appealing websites with advanced animations and
                    interactions.
                  </p>

                  <div className="projects_modal-see_project_div">
                    <button className="see_project">
                      <a
                        href="https://karthiksbrshb.github.io/TwoGoodCo./"
                        target="_blank"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3
                ? "project__content project__content-active"
                : "project__content"
            }
          >
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">Kisan Sathi</h3>
                  <span className="project_tag">ML</span>
                </div>
                <p className="project_subtitle">
                  A group project developed for a hackathon using HTML, CSS, JS,
                  Flask, and a machine learning classification model. We won
                  first prize!
                </p>
              </div>
              <img className="medium_img" src={kisansathi} alt="image" />
              <div className="project_data_links">
                <button className="see_more" onClick={() => toggleWindow(4)}>
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a
                    href="https://karthiksbrshb.github.io/KisanSathi/"
                    target="_blank"
                  >
                    Link
                  </a>
                </button>
              </div>
              <div
                className={
                  windowState === 4
                    ? "projects_modal active-modal"
                    : "projects_modal"
                }
              >
                <div className="projects_modal-content">
                  <div className="projects_modal-header">
                    <h3 className="project_modal-title">Kisan Sathi</h3>
                    <i
                      class="uil uil-multiply projects_modal-close"
                      onClick={() => toggleWindow(0)}
                    ></i>
                  </div>
                  <span className="project_modal-subtitle">
                    Hackathon Project
                  </span>
                  <p className="projects_modal-description">
                    Kisan Sathi is a group project that we developed for a
                    hackathon using HTML, CSS, JS, Flask, and a machine learning
                    classification model. The project focuses on helping farmers
                    make data-driven decisions through machine learning. We won
                    first prize for our efforts.
                  </p>
                  <h3 className="projects_modal-points-title">
                    Highlights include:
                  </h3>
                  <ul className="projects_modal-points">
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Developed a classification model to assist farmers in
                        crop selection.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Integrated APIs for real-time data and predictions.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Created an easy-to-use interface with HTML, CSS, and
                        JavaScript.
                      </p>
                    </li>
                  </ul>
                  <p className="projects_modal-info-description">
                    This project is a great example of how machine learning can
                    be used to make a positive impact on real-world problems,
                    specifically in agriculture.
                  </p>

                  <div className="projects_modal-see_project_div">
                    <button className="see_project">
                      <a
                        href="https://karthiksbrshb.github.io/KisanSathi/"
                        target="_blank"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">SoulEase</h3>
                  <span className="project_tag">App Dev</span>
                </div>
                <p className="project_subtitle">
                  A ML based wep app built with ReactJS to help users manage
                  stress, track their mental health, and find peace through
                  simple journalling.
                </p>
              </div>
              <img
                className="medium_img"
                src={soulease}
                alt="SoulEase mockup"
              />
              <div className="project_data_links">
                <button className="see_more" onClick={() => toggleWindow(5)}>
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a
                    href="https://github.com/KarthikSbrshB/SoulEase"
                    target="_blank"
                  >
                    Link
                  </a>
                </button>
              </div>
              <div
                className={
                  windowState === 5
                    ? "projects_modal active-modal"
                    : "projects_modal"
                }
              >
                <div className="projects_modal-content">
                  <div className="projects_modal-header">
                    <h3 className="project_modal-title">SoulEase</h3>
                    <i
                      class="uil uil-multiply projects_modal-close"
                      onClick={() => toggleWindow(0)}
                    ></i>
                  </div>
                  <span className="project_modal-subtitle">
                    App Development
                  </span>
                  <p className="projects_modal-description">
                    SoulEase is a mental wellness app built with Flutter. The
                    app helps users manage stress, track their mental health,
                    and find peace through guided meditations, breathing
                    exercises, and mood tracking. It combines modern design with
                    powerful functionality to create a calming experience for
                    the user.
                  </p>
                  <h3 className="projects_modal-points-title">
                    Highlights include:
                  </h3>
                  <ul className="projects_modal-points">
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Developed a cross-platform app using Flutter, ensuring
                        smooth performance on both Android and iOS.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Implemented guided meditation sessions and breathing
                        exercises to help users relax and unwind.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Integrated mood tracking and stress management tools to
                        help users monitor their mental health.
                      </p>
                    </li>
                  </ul>
                  <p className="projects_modal-info-description">
                    This project showcases the potential of mobile app
                    development in promoting mental wellness and self-care,
                    making it easier for users to focus on their well-being.
                  </p>

                  <div className="projects_modal-see_project_div">
                    <button className="see_project">
                      <a
                        href="https://github.com/KarthikSbrshB/SoulEase"
                        target="_blank"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 4
                ? "project__content project__content-active"
                : "project__content"
            }
          >
            <div className="project_data">
              <div className="project_data_titles">
                <div className="project_title_div">
                  <h3 className="project_title">Tuning for Trouble</h3>
                  <span className="project_tag">Article</span>
                </div>
                <p className="project_subtitle">
                  We trust AI to be fair, but what if the secret recipe to
                  making it smarter is actually making it biased?
                </p>
              </div>
              <img className="medium_img" src={medium_article} alt="image" />
              <div className="project_data_links">
                <button className="see_more" onClick={() => toggleWindow(1)}>
                  <a>See more</a>
                </button>
                <button className="see_project">
                  <a
                    href="https://medium.com/@karthiksbrsh/tuning-for-trouble-how-hyperparameters-can-amplify-bias-49ece55c6f32"
                    target="_blank"
                  >
                    Link
                  </a>
                </button>
              </div>
              <div
                className={
                  windowState === 1
                    ? "projects_modal active-modal"
                    : "projects_modal"
                }
              >
                <div className="projects_modal-content">
                  <div className="projects_modal-header">
                    <h3 className="project_modal-title">Tuning for Trouble</h3>
                    <i
                      class="uil uil-multiply projects_modal-close"
                      onClick={() => toggleWindow(0)}
                    ></i>
                  </div>
                  <span className="project_modal-subtitle">Medium Article</span>
                  <p className="projects_modal-description">
                    We trust AI to be fair, but what if the secret recipe to
                    making it smarter is actually making it biased? In this
                    piece, I explore how hyperparameters, the seemingly
                    technical details behind AI models, can unintentionally
                    introduce or amplify bias.
                  </p>
                  <h3 className="projects_modal-points-title">
                    Highlights include:
                  </h3>
                  <ul className="projects_modal-points">
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        How hyperparameters influence the behavior AI systems.
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        The silent but significant impact of bias in AI
                      </p>
                    </li>
                    <li className="projects_modal-point">
                      <i class="uil uil-check-circle projects_modal-circle"></i>
                      <p className="projects_modal-info">
                        Practical strategies to mitigate bias and build fairer
                        AI systems
                      </p>
                    </li>
                  </ul>
                  <p className="projects_modal-info-description">
                    This article is a must-read for anyone interested in AI
                    ethics, machine learning, and the future of technology.
                    Whether you're a tech enthusiast, a data scientist, or just
                    curious about how AI works, there's something here for you!
                  </p>

                  <div className="projects_modal-see_project_div">
                    <button className="see_project">
                      <a
                        href="https://medium.com/@karthiksbrsh/tuning-for-trouble-how-hyperparameters-can-amplify-bias-49ece55c6f32"
                        target="_blank"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
