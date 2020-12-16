import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { HomeMobile, Bell, DiscoverMobile, SignInUser } from "../../../icons";
import {ModalType} from "../../../constant"
import "./mobile-navigation.scss";

export default class MobileNavigation extends PureComponent {
  handleUnauthorizedRoute = () => {
    const { openModal } = this.props;
   if(isMobile) document.body.style.position ="fixed";
    openModal(ModalType.LOGIN)
  };
  render() {
    const { isLoggedIn,history  } = this.props;
    const {location} = history;
    return (
      <BottomNavigation className="footer-navigation">
        <BottomNavigationAction exact to={"/"} component={NavLink} label="Home" value="Home" icon={<HomeMobile width={20} height={20} className="home-m" />} />
        <BottomNavigationAction className={location.pathname.indexOf("/discover") > -1 ? "active" : ""} to={"/discover-category"} component={NavLink} label="Discover" value="Discover" icon={<DiscoverMobile width={20} height={20} className="discover-m" />} />
        {isLoggedIn ?
            <BottomNavigationAction exact to={"/notification"} component={NavLink} label="Notifications" value="Notifications" icon={<Bell width={20} height={20} className="bell" />} />
       : 
            <BottomNavigationAction onClick={this.handleUnauthorizedRoute} label="Notifications" value="Notifications" icon={<Bell width={20} height={20} className="bell" />} />
        }

        {isLoggedIn ? 
          <BottomNavigationAction exact to={"/account"} component={NavLink} label="Me" value="Me" icon={<SignInUser width={20} height={20} className="signin-user" />} />
        : 
          <BottomNavigationAction onClick={this.handleUnauthorizedRoute} label="Me" value="Me" icon={<SignInUser width={20} height={20} className="signin-user" />} />
        }

      </BottomNavigation>
    );
  }
}
