import React, { Component } from "react";
import "./CSS/Contact.css";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="contact-container">
        <div className="contact-header-container">
          <h1 className="contact-head">Get in touch</h1>
          <p class="head-para">Hey Wanna Contact Me? 📞</p>
        </div>
        <div className="contact-form-container">
          <form class="contact-form" action="https://formspree.io/f/xjvjevgo" method="POST">
              <input type="email" name="_replyto" id="" placeholder="Your Email Id"/>
              <br />
              <textarea name="message" placeholder="Your Message"></textarea>
                <br />
            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Projects;
