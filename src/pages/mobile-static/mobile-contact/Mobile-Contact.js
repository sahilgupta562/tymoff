import React, { PureComponent } from "react";
import "./Mobile-Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default class MobileContact extends PureComponent {
  render() {
    return (
      <div className="home-tile tymoff-contact">
        <div className="contact-address ">
          <p>Got a question ?</p>
          <p className="desc">
            There are so many ways to contact us, the easiest of them is to simply fill the form below and we'll respond to you within 24 hours.
            <br />
            <br />
            tymoff recognizes that your privacy is very important and we take it seriously. Generally, the information requested by tymoff will be used to provide a website feature or service to you.
            This Privacy Policy describes tymoff’s intended use of that information, how that information is collected, security measures tymoff takes to protect that information, and use of that
            information.
          </p>
          {/* <h1>India</h1> */}
          <ul>
            <li>
              {/* <i className="fa fa-envelope-o" aria-hidden="true"></i> */}
              <FontAwesomeIcon className="icon" icon={faEnvelope} /> 
              <a href="mailto:info@tymoff.com">info@tymoff.com</a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form action="" onSubmit={e => this.formSubmit(e, "send message", "contact form")}>
            <h2>Drop your message here</h2>

            <div className="form-group">
              <input type="text" placeholder="Name" name="name" autoComplete="off" />
              <div className="error"></div>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Email" name="email" autoComplete="off" />
              <div className="error"></div>
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="3"></textarea>
              <div className="error"></div>
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}
