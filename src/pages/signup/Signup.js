import React, { PureComponent } from "react";
import SignUpRIghtImage from "../../assets/images/sign-right-img.png";
import Logo from "../../assets/images/logo.png";
import "./signup.scss";

class Signup extends PureComponent {
  render() {
    return (
      <main className="signup-page">
        <section className="left-section">
          <div className="auth-box">
            <div className="sign-up-logo">
              <img src={Logo} alt="LOGO" />
            </div>
            <div id="loginform" className="signup-form">
              <div className="text-center">
                <h4> Sign-up with Xibo <br /> and enjoy a limited free trial </h4>
              </div>
              <form>
                <div className="flex-container">
                  <div className="input-field">
                    <input id="firstname" name="firstName" type="text" class="validate" value="" />
                    <label for="firstname">First Name</label>
                    <span class="error-message"></span>
                  </div>
                  <div class="input-field">
                    <input id="lastname" name="lastName" type="text" class="validate" value="" />
                    <label for="lastname">Last Name</label>
                    <span class="error-message"></span>
                  </div>
                </div>
                <div className="input-field">
                  <input id="email" name="email" type="text" className="validate valid" value="dev@xion.ai" />
                  <label for="email" className="active">Email</label>
                  <span className="error-message"></span>
                </div>
                <div className="flex-container">
                  <div className="input-field">
                    <select name="" id="selectCountry">
                      <option value="Singapore"></option>
                    </select>
                    <label htmlFor="selectCountry">Country Code</label>
                  </div>
                  <div class="input-field">
                    <input id="phoneNumber" name="phoneNumber" type="text" class="validate" maxlength="8" pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$" value="" />
                    <label for="phoneNumber" class="">Phone Number</label>
                    <span class="error-message"></span>
                  </div>
                </div>
                <div className="input-field">
                  <input id="password" type="password" name="password" className="validate valid" value="admin" />
                  <label for="password" className="active">Password</label>
                  <span className="error-message"></span>
                </div>
                <div className="input-field">
                  <input id="confirmPassword" type="password" name="password" className="validate valid" value="admin" />
                  <label for="confirmPassword" className="active">Confirm Password</label>
                  <span className="error-message"></span>
                </div>
                <div className="flex-container accept-terms">
                  <label>
                    <input type="checkbox" class="filled-in" />
                    <span>I agree to the <a href="test" target="_blank"> Terms of Service </a>
                  and <a href="test" target="_blank"> Privacy Policy</a>
                    </span>
                  </label>
                </div>
                <button className="btn login-submit" type="submit">Sign Up</button>
              </form>
              <div className="text-center dont-have-account">
                Have an account? <a href="/login">Log In</a>
              </div>
            </div>
          </div>
        </section>
        <section className="right-section">
          <div>
            <h2>  We are happy that you are interested</h2>
            <p>
              <span style={{ fontStyle: "italic" }}>It takes two to tango</span>
            - as the saying goes ...Help us with a few details and we will send you an email to verify that we are good to start
            </p>
            <div className="right-img">
              <img src={SignUpRIghtImage} alt="SignUpRIghtImage" />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Signup;
