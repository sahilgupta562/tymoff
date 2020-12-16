import React, { PureComponent } from "react";
import { Modal, Backdrop, Fade, Button, CircularProgress } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./add-folder-modal.scss";

export default class AddFolderModal extends PureComponent {
  handleClose = () => {
    const { closeModal, clearAddFolder } = this.props;
    clearAddFolder();
    closeModal(ModalType.ADD_FOLDER);
  };

  render() {
    const { modal, data, setAddFolderName, addFolder } = this.props;
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
          <div className="paper add-folder-modal">
            <div className="modalContent">
              <div className="modalHeader">
                <button className="btn close" onClick={this.handleClose}>
                  ×
                </button>
                <h3 id="transition-modal-title" className="modalTitle">
                  Add Folder
                </h3>
              </div>
              <div className="modalBody">
                <div className="input-field">
                  <input type="text" placeholder="Folder name" value={data.form} onChange={event => setAddFolderName(event.target.value)} />
                  <span>{data.error}</span>
                </div>
              </div>
              <div className="modalFooter">
                <button onClick={this.handleClose} className="btn cancelBtn">
                  CANCEL
                </button>
                <div className={"wrapper"}>
                  <Button variant="contained" className={`btn ${data.isLoading ? "cancelBtn" : "createBtn"}`} disabled={data.isLoading} onClick={addFolder}>
                    Create
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
