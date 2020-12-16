import React, { PureComponent } from "react";
import { Modal, Backdrop, Fade, Button, CircularProgress } from "@material-ui/core";
import { TreeView } from "@material-ui/lab";
import { Folder } from "@material-ui/icons";
import { MenuItem } from "../../../containers";
import { ModalType, ActionType } from "../../../../constant";
import "./move-file-folder-modal.scss";

export default class MoveFileFolderModal extends PureComponent {
  handleClose = () => {
    const { closeModal, clearMoveFolder } = this.props;
    clearMoveFolder();
    closeModal(ModalType.MOVE_FILE_FOLDER);
  };
  handleFolderSelection = folderPath => {
    const { setMoveFolder } = this.props;
    setMoveFolder(folderPath);
  };

  handleMove = () => {
    const { moveFiles, moveFolder, actionType } = this.props;
    if (ActionType.FILE === actionType) moveFiles();
    else if (ActionType.FOLDER === actionType) moveFolder();
  };

  getTreeItemsFromData = treeItems => {
    return (
      treeItems &&
      treeItems.map(treeItemData => {
        let children = undefined;
        if (treeItemData.children && !!treeItemData.children.length) {
          children = this.getTreeItemsFromData(treeItemData.children.filter(x => x.dir));
        }
        return (
          <MenuItem
            key={treeItemData.path}
            nodeId={treeItemData.path}
            labelText={treeItemData.name}
            labelIcon={Folder}
            children={children}
            bgColor={"#4f83cc"}
            color={"#fff"}
            onClick={() => this.handleFolderSelection(treeItemData.path)}
          />
        );
      })
    );
  };
  render() {
    const { modal, folders, selectedCompany, data } = this.props;
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={modal}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={modal}>
          <div className="paper move-file-folder-modal">
            <div className="modalContent">
              <div className="modalHeader">
                <button className="btn close" onClick={this.handleClose}>
                  ×
                </button>
                <h3 id="transition-modal-title" className="modalTitle">
                  Move Folder
                </h3>
              </div>
              <div className="modalBody">
                <TreeView
                  expanded={!!data.moveSelectedNodes.length ? data.moveSelectedNodes : [selectedCompany.companyID]}
                  selected={data.moveSelectedFolder}
                  defaultEndIcon={<div style={{ width: 24 }} />}
                >
                  <MenuItem
                    nodeId={selectedCompany.companyID}
                    labelText={"All Documents"}
                    bgColor={"#4f83cc"}
                    color={"#fff"}
                    labelIcon={Folder}
                    children={folders && !!folders.length ? this.getTreeItemsFromData(folders.filter(x => x.dir)) : []}
                    onClick={() => this.handleFolderSelection(selectedCompany.companyID)}
                  />
                </TreeView>
              </div>
              <div className="modalFooter">
                <button onClick={this.handleClose} className="btn cancelBtn">
                  CANCEL
                </button>
                <div className={"wrapper"}>
                  <Button variant="contained" className={`btn ${data.isLoading ? "cancelBtn" : "createBtn"}`} disabled={data.isLoading} onClick={this.handleMove}>
                    Move Here
                  </Button>
                  {data.isLoading && <CircularProgress size={24} className={"button-progress"} />}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}
