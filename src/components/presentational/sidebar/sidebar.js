import React, { PureComponent, Fragment } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Add, Remove } from "@material-ui/icons";
import { HomeWeb, Format, DiscoverWeb, LanguageWeb, CountryWeb, Apple, Android } from "../../../icons";
import { DiscoverOption } from "./discover-option";
import { StaticRoutes, AuthorizedDiscoverRoute, ModalType, SelectedText } from "../../../constant";
import { SidebarNavLink } from "../../containers";
import "./sidebar.scss";

class Sidebar extends PureComponent {
  state = { subMenu: true };
  handleDiscoverClick = () => {
    const { openSidebar, sidebar, navlinkChange } = this.props;
    navlinkChange();
    if (!sidebar) {
      this.setState({ subMenu: true });
      openSidebar();
    } else this.setState(prevState => ({ subMenu: !prevState.subMenu }));
  };

  handleModalClick = modal => {
    const { openModal, navlinkChange } = this.props;
    navlinkChange();
    openModal(modal);
  };

  handleUnauthorizedRoute = () => {
    const { openModal, navlinkChange, showSelectedText } = this.props;
    navlinkChange();
    openModal(ModalType.LOGIN);
    showSelectedText(SelectedText.DISCOVER_TEXT)

  };
  render() {
    const { sidebar, discoverList, userDiscoverList, isLoggedIn, selectedCountries, selectedLanguages, isDiscoverRoute } = this.props;
    const { subMenu } = this.state;
    return (
      <Drawer
        variant="permanent"
        className={clsx("drawer", {
          drawerOpen: sidebar,
          drawerClose: !sidebar
        })}
        classes={{
          paper: clsx("sidebarStyle", {
            drawerOpen: sidebar,
            drawerClose: !sidebar
          })
        }}
      >
        <List component="nav" aria-labelledby="nested-list-subheader" className="nestedRoot">
          <SidebarNavLink exact listItemClass="NavItem NavItemHomes" itemTextClass="NavItemText" activeClass="active" to={"/"} title={"Home"}>
            <IconButton>
              <HomeWeb height={"16px"} width={"16px"} className="home-web" />
            </IconButton>
          </SidebarNavLink>
          <SidebarNavLink exact listItemClass="NavItem NavItemCategories" itemTextClass="NavItemText" activeClass="active" to={"/categories"} title={"Categories"}>
            <IconButton>
              <Format height={"16px"} width={"16px"} className="formats" />
            </IconButton>
          </SidebarNavLink>
          <ListItem className={`NavItem NavItemDiscover ${isDiscoverRoute ? "active" : ""}`} title="Discover" button onClick={this.handleDiscoverClick}>
            <IconButton>
              <DiscoverWeb height={"16px"} width={"16px"} className="discover-web" />
            </IconButton>
            <ListItemText className="NavItemText" primary="Discover" />
            {!sidebar ? null : subMenu ? <Remove /> : <Add />}
          </ListItem>
          <Collapse in={!sidebar ? false : subMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding style={{ marginTop: 3 }}>
              <DiscoverOption optionsList={discoverList} />
              {isLoggedIn ? (
                <DiscoverOption optionsList={userDiscoverList} />
              ) : (
                  <Fragment>
                    {AuthorizedDiscoverRoute.map((route, index) => (
                      <ListItem className="NavItem" key={index} button onClick={this.handleUnauthorizedRoute}>
                        <ListItemText className="nested NavItemText" primary={route.title} />
                      </ListItem>
                    ))}
                  </Fragment>
                )}
            </List>
          </Collapse>
          <ListItem className="NavItem NavItemCountry" title="Country" button onClick={() => this.handleModalClick(ModalType.COUNTRY)}>
            <IconButton>
              <CountryWeb height={"16px"} width={"16px"} className="country-web" />
              {!!selectedCountries.length && <span className="dot"></span>}
            </IconButton>
            <ListItemText className="NavItemText" primary={!!selectedCountries.length ? selectedCountries.toString() : !!sidebar ? "Select Country" : "Country"} />
          </ListItem>
          <ListItem className="NavItem NavItemLanguage" title="Language" button onClick={() => this.handleModalClick(ModalType.LANGUAGE)}>
            <IconButton>
              <LanguageWeb height={"16px"} width={"16px"} className="language-web" />
              {!!selectedLanguages.length && <span className="dot"></span>}
            </IconButton>
            <ListItemText className="NavItemText" primary={!!selectedLanguages.length ? selectedLanguages.toString() : !!sidebar ? "Select Language" : "Language"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            className="NavItem NavItemPlayStore" title="Play Store"
            button
            onClick={() => {
              window.open("https://play.google.com/store/apps/details?id=com.tymoff");
            }}
          >
            <IconButton>
              <Android height={"16px"} width={"16px"} className="android" />
            </IconButton>
            <ListItemText className="NavItemText" primary={"Play Store"} />
          </ListItem>
          <ListItem
            className="NavItem NavItemAppStore" title="App Store"
            button
            onClick={() => {
              window.open("https://apps.apple.com/in/app/tymoff/id1486021014");
            }}
          >
            <IconButton>
              <Apple height={"16px"} width={"16px"} className="apple" />
            </IconButton>
            <ListItemText className="NavItemText" primary={"App Store"} />
          </ListItem>
        </List>
        <Divider />
        <List className="privacyContact">
          {StaticRoutes.map((route, index) => (
            <SidebarNavLink key={index} exact listItemClass="NavItem" itemTextClass="NavItemText" activeClass="active" to={route.to} title={route.title} />
          ))}
        </List>
      </Drawer>
    );
  }
}

export default Sidebar;
