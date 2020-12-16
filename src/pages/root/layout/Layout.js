import React, { PureComponent, Fragment } from "react";
import clsx from "clsx";
import { Header } from "../../../components";
import Modal from "../../modal";
import SecureRouter from "../Secure-Router";
import "./layout.scss";
import "../modal.scss";

class Layout extends PureComponent {
  render() {
    const { sidebar } = this.props;
    return (
      <Fragment>
        <Header />
        <Modal />
        <div
          className={clsx("container", {
            drawerOpen: sidebar,
            drawerClose: !sidebar
          })}
        >
          <SecureRouter />
        </div>
      </Fragment>
    );
  }
}

export default Layout;
