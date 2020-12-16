import React, { PureComponent } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { ModalType } from "../../../constant";

class FolderContextMenu extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.FOLDER_CONTEXT_MENU);
  };
  handleAddFolder = () => {
    const { openModal } = this.props;
    this.handleClose();
    openModal(ModalType.ADD_FOLDER);
  };

  handleRenameFolder = () => {
    const { openModal } = this.props;
    this.handleClose();
    openModal(ModalType.RENAME_FOLDER);
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

  handleUploadFolder = () => {
    const { openModal } = this.props;
    this.handleClose();
    openModal(ModalType.UPLOAD_FOLDER);
  };

  render() {
    const { modal, mouseX, mouseY } = this.props;
    return (
      <Menu
        id="simple-menu"
        anchorReference="anchorPosition"
        anchorPosition={mouseY !== null && mouseX !== null ? { top: mouseY, left: mouseX } : undefined}
        keepMounted
        open={modal}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleAddFolder}>New Folder</MenuItem>
        <MenuItem onClick={this.handleRenameFolder}>Rename Folder</MenuItem>
        <MenuItem onClick={this.handleMoveFolder}>Move Folder</MenuItem>
        <MenuItem onClick={this.handleDeleteFolder}>Delete Folder</MenuItem>
        <MenuItem onClick={this.handleUploadFolder}>Upload Folder</MenuItem>
      </Menu>
    );
  }
}

export default FolderContextMenu;
