import React, { PureComponent, Fragment } from "react";
import { Grid, UserInfo, ProfileImage } from "../../components";
import { ContentAction } from "../../constant";
import { isServer } from "../../store";

import "./account.scss";

class Account extends PureComponent {
  constructor(props) {
    super(props);
    const { setContentAction, resetContentPage, clearContent, routeFromLightbox } = props;
    if (!routeFromLightbox) {
      resetContentPage();
      clearContent();
      setContentAction(ContentAction.upload);
    }
  }

  render() {
    return (
      <Fragment>
        {!isServer && (
          <div className="myAccount">
            <ProfileImage />
            <UserInfo />
            <div className="actionBtn">
              <h2>My Posts</h2>
            </div>
          </div>
        )}
        <Grid />
      </Fragment>
    );
  }
}

export default Account;
