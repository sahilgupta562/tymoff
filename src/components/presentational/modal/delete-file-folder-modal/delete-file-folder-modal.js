import React, { PureComponent } from "react";
import { Modal, Backdrop, Fade, Button, CircularProgress } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./delete-file-folder-modal.scss";

export default class DeleteFileFolderModal extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.DELETE_FILE_FOLDER);
  };
  render() {
    const { modal, selectedFolder, data, deleteFolder } = this.props;
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
          <div className="paper delete-file-folder-modal">
            <div className="modalContent">
              <div className="modalHeader">
                <button className="btn close" onClick={this.handleClose}>
                  ×
                </button>
                <h3 id="transition-modal-title" className="modalTitle">
                  Are you sure want to delete?
                </h3>
              </div>
              <div className="modalBody">
                <div className="input-field">
                  <input type="text" value={selectedFolder} readOnly />
                </div>
              </div>
              <div className="modalFooter">
                <button className="btn cancelBtn">CANCEL</button>
                <div className={"wrapper"}>
                  <Button variant="contained" className={`btn ${data.isLoading ? "cancelBtn" : "createBtn"}`} disabled={data.isLoading} onClick={deleteFolder}>
                    Delete
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
