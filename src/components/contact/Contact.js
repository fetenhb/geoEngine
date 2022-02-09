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
  const isEmail = () => {
    let isMail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      isMail.style.display = "none";

      return true;
    } else {
      isMail.style.display = "block";

      isMail.style.animation = "dongle 1s";

      setTimeout(() => {
        isMail.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const failMessage = (message) => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML =
      ' <svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></symbol></svg> <div class="alert alert-danger d-flex align-items-center" role="alert"> <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg><div> Please fill in all required fields (*) so that we can answer easier. </div> </div>';
    formMess.style.background = "rgb(253, 87, 87)";
    formMess.style.opacity = "1";
    document.getElementById("name").classList.add("error");
    document.getElementById("subject").classList.add("error");
    document.getElementById("phone").classList.add("error");
    document.getElementById("email").classList.add("error");
    document.getElementById("message").classList.add("error");
  };
  const succesMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML =
      '  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></symbol></svg>        <div class="alert alert-success d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg><div>  Your message has been sent. Thank you!</div></div>';
    formMess.style.background = "#00c1ec";
    formMess.style.opacity = "1";
    document.getElementById("name").classList.remove("error");
    document.getElementById("subject").classList.remove("error");
    document.getElementById("phone").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("message").classList.remove("error");

    setTimeout(() => {
      formMess.style.opacity = "0";
    }, 5000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_waaamvo", {
        name,
        subject,
        phone,
        email,
        message,
      });
    } else failMessage("merci de remplir");
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_u4zq01p", templateId, variables)
      .then((res) => {
        succesMessage();
        setName("");
        setSubject("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => failMessage());
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
                    placeholder="Your Name *"
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
                    placeholder="Your Phone *"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
              <div class="email-content form-group">
                <label id="not-mail">Email non valide</label>
                <input
                  type="mail"
                  class="form-control"
                  name="Email"
                  id="email"
                  placeholder="Your Email *"
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
                  placeholder="Subject *"
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
                  id="message"
                  placeholder="Message *"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
              {/* <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div> */}
              <div class="text-center">
                <button type="submit" onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
              <div className="form-message"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
