import React, { PureComponent, Fragment } from "react";
import { ButtonBase } from "@material-ui/core";
import { get, kebabCase } from "lodash";
import { LazyImage } from "../lazy-image";
import { NotificationType } from "../../../constant";
import muteNotification from "../../../assets/images/mute_notification.svg";

export default class Notifications extends PureComponent {
  renderImages = contentUrl => {
    const { url, thumbnailImage } = contentUrl;
    return <LazyImage containerStyle={{ height: "130px", width: "90px" }} style={{ height: "130px", width: "90px" }} alt={"alt"} src={url} thumbnail={thumbnailImage} />;
  };

  handleNotificationClick = notification => {
    const { notificationType } = notification;
    if (notificationType === NotificationType.CONTENT) {
      const { contentMain } = notification;
      const encryptedUrl = btoa(contentMain.id);
      window.open(`/content/${encryptedUrl.replace(/=/g, "")}`, "_self");
    } else if (notificationType === NotificationType.DISCOVER) {
      const { discoverData } = notification;
      window.open(`/discover/${kebabCase(discoverData.name)}`, "_self");
    }
  };

  renderNotification = notification => {
    const contentUrl = get(notification, "contentMain.contentUrl", []);
    const isMultipleImages = !!(contentUrl.length > 1);
    return (
      <ButtonBase className="notifbtn" onClick={() => this.handleNotificationClick(notification)}>
        <div className={isMultipleImages ? "notification-scroll" : "notification-tile"}>
          <span className="title">{notification.title}</span>
          <span className="time"> 1h </span>
          {isMultipleImages && (
            <ul className="notificationSlider">
              {contentUrl.map((content, index) => (
                <li key={index}>{this.renderImages(content)}</li>
              ))}
            </ul>
          )}
          {!!contentUrl.length && !isMultipleImages && (
            <div className="notification-image">
              <LazyImage containerStyle={{ height: "130px", width: "100%" }} style={{ height: "130px", width: "100%" }} alt={"alt"} src={contentUrl[0].url} thumbnail={contentUrl[0].thumbnailImage} />
            </div>
          )}
        </div>
      </ButtonBase>
    );
  };

  render() {
    const { notifications } = this.props;
    return (
      <Fragment>
        {!!notifications.length ? (
          notifications.map((notification, index) => <Fragment key={index}>{this.renderNotification(notification)}</Fragment>)
        ) : (
            <div className="notif-msg">
              <div className="content">
                <img src={muteNotification} alt="" />
                {/* <h5>No notifications yet</h5> */}
                <h6>You have no new notifications yet</h6>
              </div>
            </div>
          )}
      </Fragment>
    );
  }
}
