import React, { PureComponent } from "react";
import loginRightImage from "../../assets/images/login-right-img.png";
import Logo from "../../assets/images/logo.png";
import "./login.scss";
class Login extends PureComponent {
  render() {
    return (
      <main className="login-page">
        <section className="left-section">
          <div className="auth-box">
            <div className="sign-up-logo">
              <img src={Logo} alt="LOGO" />
            </div>
            <div id="loginform" className="login-form">
              <div className="text-center">
                <h4> Log-In with Xibo </h4>
              </div>
              <form>
                <div className="input-field">
                  <input id="email" name="email" type="text" className="validate valid" value="" />
                  <label for="email" className="active">Email</label>
                  <span className="error-message"></span>
                </div>
                <div className="input-field">
                  <input id="password" type="password" name="password" className="validate valid" value="admin" />
                  <label for="password" className="active">Password</label>
                  <span className="error-message"></span>
                </div>
                <button className="btn login-submit" type="submit">Login</button>
              </form>
              <div className="text-center dont-have-account">
                Don't have an account? <a href="/signup">Sign Up</a>
              </div>
            </div>
          </div>
        </section>
        <section className="right-section">
          <div>
            <h2> Welcome Back!</h2>
            <p> We hope you are enjoying your journey with us.</p>
            <p>We are here with you on this ride so reach out to us and we would be happy to help.</p>
            <div className="right-img">
              <img src={loginRightImage} alt="loginRightImage" />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Login;
