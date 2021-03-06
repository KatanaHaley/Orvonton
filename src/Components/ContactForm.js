import React from "react";
import "./ContactForm.css";
import linkedin from "./images/linkedin.png";
import GitHubMark from "./images/GitHubMark.png";
import medium from "./images/medium.jpg";

function ContactForm() {
  return (
    <div className="container" id="contact">
      <form action="https://formspree.io/f/mwkwqkjg" method="POST" class="form">
        <fieldset>
          <h3>Contact me</h3>
          <p textAlign="left">
            I'm interested in freelance opportunities, ambitious projects. If
            you have any questions, feel free to contact me using the form.
          </p>
          <div class="">
            <label>
              <input name="name" placeholder="Name:"/>
            </label>
            <label>
              <input name="email" input type="text" name="_replyto" placeholder="Email:"/>
            </label>
          </div>
          <div class="container">
            <label>
              <input name="subject" input type="text" placeholder="Subject:" />
            </label>
          </div>
          <div class="">
          <label>
            <textarea name="message" placeholder="Message:"></textarea>
          </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
      <br></br>
      <div>
        <img src={GitHubMark} alt="GitHub logo" width="50" height="50"></img>
        <img src={linkedin} alt="LinkedIn logo" width="50" height="50"></img>
        <img src={medium} alt="Medium logo" width="50" height="50"></img>
      </div>
    </div>
  );
}

export default ContactForm;
