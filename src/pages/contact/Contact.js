import React, { PureComponent } from "react";
import { ContactTag } from "../../jsonLD";
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
    };
  }
  handleBackClick = () => {
    const { history } = this.props;
    !!history.length ? history.goBack() : history.push("/");
  };

  handleChange = (event) => {
    event.preventDefault();
    setTimeout(() => {
      this.setState({ formValid: this.validateForm() });
    }, 100);
  }



  validateForm = () => {

    if (this.props.name === '' || this.props.email === '' || this.props.message === '') {
      return false;
    } else {
      return true;
    }

  }

  formSubmit = (event) => {
    event.preventDefault();
    const { sendContact } = this.props;
    sendContact();
  };

  render() {
    const { name, email, message, setContactName, setContactEmail, setContactMessage, error, isLoading } = this.props;
    return (
      <div className="home-tile tymoff-contact">
        <ContactTag />
        {/* <LoaderComponenent></LoaderComponenent> */}
        <div className="sub-header tab-hidden text-left">
          <button className="back-btn" onClick={this.handleBackClick}></button>
          <h1> Contact Us</h1>
        </div>
        <div className="contact-address ">
          <h1 className="mobile-hidden">Contact Us</h1>
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
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <a href="mailto:info@tymoff.com">info@tymoff.com</a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form>
            <h2>Drop your message here</h2>

            <div className="form-group">
              <input type="text" placeholder="Name" name="name" required={true} autoComplete="off" value={name} onChange={(event) => { setContactName(event.target.value); this.handleChange(event) }} />
            </div>
            <div className="form-group">
              <input type="text"
                className={error === 'Invalid email' ? 'input-error' : ''}
                title={error === 'Invalid email' ? 'Please enter email in correct format' : ''}
                placeholder="Email" name="email" required={true} autoComplete="off" value={email} onChange={(event) => { setContactEmail(event.target.value); this.handleChange(event) }} />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="3" required={true} value={message} onChange={(event) => { setContactMessage(event.target.value); this.handleChange(event) }}></textarea>
            </div>
            <div className="error">{error}</div>
            <div>{this.state.formValid}</div>
            <button className="msg" disabled={isLoading || !this.state.formValid} onClick={this.formSubmit}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
