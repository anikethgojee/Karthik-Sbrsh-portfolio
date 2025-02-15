import React from "react";
import "./Footer.css";
import FooterCols from "../FooterCols/FooterCols";

const Footer = () => {
  return (
    <div className="main_f_container">
      <div className="f_container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">
            <a href="/">Sbrsh.</a>
          </h1>
        </div>
        <span className="divider_v"></span>
        <div className="footer__col2">
          <FooterCols
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "#home",
                type: "Link",
              },
              {
                title: "Profile",
                path: "#profile",
                type: "Link",
              },
              {
                title: "Education",
                path: "#education",
                type: "Link",
              },
              {
                title: "Projects",
                path: "#projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "#contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCols
            heading="Handles"
            links={[
              {
                title: "Medium",
                path: "https://medium.com/@karthiksbrsh",
              },
              {
                title: "GitHub",
                path: "https://github.com/KarthikSbrshB",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/karthiksbrsh/",
              },
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/karthiksabareeshboddeti21052004/",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCols
            heading="Contact Info"
            links={[
              {
                title: "+91 99899 07703",
                path: "tel:+919989907703",
              },
              {
                title: "karthiksabareeshb@gmail.com",
                path: "mailto:karthiksabareeshb@gmail.com",
              },
              {
                title: "Miyapur, Hyderabad, 500049",
                path: "https://maps.app.goo.gl/5ErGsncSse2VwbSA9",
              },
            ]}
          />
        </div>
      </div>
      <span className="divider"></span>
      <div className="copyright">
        <p>Copyright © 2024 Karthik Sabareesh Boddeti. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
