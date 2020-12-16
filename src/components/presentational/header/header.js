import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { CompanyMenu } from "../../containers";
import Sidebar from "../sidebar";
import "./header.scss";

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    const { loadAuth, loadCompany } = props;
    loadAuth();
    loadCompany();
  }
  render() {
    return (
      <AppBar position="fixed" className="appBar">
        <Toolbar className="MuiToolbarRegular">
          <div className="headerLogo">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleSidebar} className="hamburger">
              <MenuIcon />
            </IconButton>
            {/* <Link to="/">
              <Logo width={"80px"} height={"24px"} className="logo-original" />
            </Link> */}
          </div>
          <CompanyMenu />
        </Toolbar>
        <Switch>
          <Route path="/" exact component={Sidebar} />
        </Switch>
      </AppBar>
    );
  }
}
