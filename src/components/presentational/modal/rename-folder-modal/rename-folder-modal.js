import React, { PureComponent } from "react";
import { Modal, Backdrop, Fade, Button, CircularProgress } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./rename-folder-modal.scss";

export default class RenameFolderModal extends PureComponent {
  handleClose = () => {
    const { closeModal, clearRenameFolder } = this.props;
    closeModal(ModalType.RENAME_FOLDER);
    clearRenameFolder();
  };
  render() {
    const { modal, data, setRenameFolderName, renameFolder, selectedFolder } = this.props;
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
          <div className="paper rename-folder-modal">
            <div className="modalContent">
              <div className="modalHeader">
                <button className="btn close" onClick={this.handleClose}>
                  ×
                </button>
                <h3 id="transition-modal-title" className="modalTitle">
                  Rename Folder
                </h3>
              </div>
              <div className="modalBody">
                <div className="input-field">
                  <input type="text" defaultValue={selectedFolder} readOnly={true} />
                  <label htmlFor=""> Current Folder</label>
                </div>
                <div className="input-field">
                  <input type="text" placeholder="New Folder Name" value={data.form} onChange={event => setRenameFolderName(event.target.value)} />
                  <span>{data.error}</span>
                </div>
              </div>
              <div className="modalFooter">
                <button onClick={this.handleClose} className="btn cancelBtn">
                  CANCEL
                </button>
                <div className={"wrapper"}>
                  <Button variant="contained" className={`btn ${data.isLoading ? "cancelBtn" : "createBtn"}`} disabled={data.isLoading} onClick={renameFolder}>
                    Rename
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
