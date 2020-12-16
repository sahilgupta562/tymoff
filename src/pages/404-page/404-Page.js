import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./404-page.scss";
class DefaultPage extends PureComponent {
  render() {
    return (
      <div className="home-tile tymoff-contact">
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>404</h1>
            </div>
            <h2>Oops! Nothing was found</h2>
            <p>
              The content you are looking for might have been removed or is temporarily unavailable.<br /><br /> <Link to="/">Return to homepage</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultPage;
