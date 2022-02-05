import React, { useState } from "react";
import "./Contact.css";
import logo from "../../assets/logoo.png";
import { Icon } from "@iconify/react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_waaamvo", {
      name,
      subject,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_u4zq01p", templateId, variables)
      .then((res) => {
        console.log("success !");
        setName("");
        setSubject("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          (document.querySelector(".form-message").innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div className="u-title" data-aos="fade-up">
          <h1>CONTACT US</h1>
          <hr />
        </div>
        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <i>
                    <Icon icon="el:map-marker" class="bx bx-map" />
                  </i>
                  <h3>Our Address</h3>
                  <p>Carthage Centre Rue du lac de Constance Bloc TUNISIE</p>
                  <br />
                  <p>A2 Les Berges du Lac 1053</p>
                  <br /> <p>Tunis</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i>
                    {" "}
                    <Icon icon="bx:bx-envelope" class="bx bx-envelope" />
                  </i>

                  <h3>Email Us</h3>
                  <p>contact@geoengine.net</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i>
                    <Icon icon="bx:bx-phone-call" class="bx bx-phone-call" />
                  </i>
                  <h3>Call Us</h3>
                  <p>+216 71 160 412</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              class="php-email-form"
            >
              <div class="row">
                <div class="col form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="col form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    id="phone"
                    placeholder="your phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit" onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
