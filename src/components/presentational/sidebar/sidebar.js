import React, { PureComponent } from "react";
import clsx from "clsx";
import { Drawer } from "@material-ui/core";
import { ModalType } from "../../../constant";
import { FolderView } from "../../containers";
import "./sidebar.scss";

class Sidebar extends PureComponent {
  uploadFile = () => {
    const { openModal } = this.props;
    openModal(ModalType.UPLOAD_FOLDER);
  };
  render() {
    return (
      <Drawer
        variant="permanent"
        className={clsx("drawer", {
          drawerOpen: true,
          drawerClose: false
        })}
        classes={{
          paper: clsx("sidebarStyle", {
            drawerOpen: true,
            drawerClose: false
          })
        }}
      >
        <button onClick={this.uploadFile} className="btn add-button">
          ADD
        </button>
        <FolderView />
      </Drawer>
    );
  }
}

export default Sidebar;
