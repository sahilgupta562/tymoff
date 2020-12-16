import React, { PureComponent } from "react";
import { ModalType } from "../../../constant";
import { Menu, MenuItem } from "@material-ui/core";

class FileContextMenu extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.FILE_CONTEXT_MENU);
  };

  handleMoveFolder = () => {
    const { openModal } = this.props;
    this.handleClose();
    openModal(ModalType.MOVE_FILE_FOLDER);
  };

  handleDeleteFolder = () => {
    const { openModal } = this.props;
    this.handleClose();
    openModal(ModalType.DELETE_FILE_FOLDER);
  };

  render() {
    const { modal, mouseX, mouseY } = this.props;
    return (
      <Menu
        id="file-context-menu"
        anchorReference="anchorPosition"
        anchorPosition={mouseY !== null && mouseX !== null ? { top: mouseY, left: mouseX } : undefined}
        keepMounted
        open={modal}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleMoveFolder}>Move File</MenuItem>
        <MenuItem onClick={this.handleDeleteFolder}>Delete File</MenuItem>
      </Menu>
    );
  }
}

export default FileContextMenu;
