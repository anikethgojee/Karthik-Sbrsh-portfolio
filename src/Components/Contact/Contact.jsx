import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_832d1tx";
    const templateId = "template_z988vtd";
    const publicKey = "cgzGjcQLDiovkemwK";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Karthik",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="contact_form" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Let's get in touch!</span>

      <div className="contact_subcontainer grid">
        {/* <div className='contact_info'>
          <h3>Like my work?</h3>
          <p>Let's get in touch and work together!</p>
        </div> */}

        <form onSubmit={handleSubmit} className="contactForm">
          <div className="contact_form-div">
            <label className="contact_form-tag">Name</label>
            <input
              className="contact_form-input"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contact_form-div">
            <label className="contact_form-tag">E-mail</label>
            <input
              className="contact_form-input"
              type="email"
              placeholder="Your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact_form-div">
            <label className="contact_form-tag">Message</label>
            <textarea
              className="contact_form-input"
              cols="30"
              rows="10"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit_button">
            <a>Send Email</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
