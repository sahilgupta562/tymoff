import React, { PureComponent } from "react";
import { Modal, Backdrop, Fade, Grid, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { isMobile } from "react-device-detect";
import { ModalType } from "../../../../constant";
import "./upload-file-modal.scss";

export default class UploadFileModal extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.UPLOAD_FOLDER);
  };
  render() {
    const { modal } = this.props;
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
          timeout: 500,
        }}
      >
        <Fade in={modal}>
          <div className="paper upload-file-modal">
            <div className="modalContent">
              <div className="modalHeader">
                <button className="btn close" onClick={this.handleClose}>
                  ×
                </button>
                <h3 id="transition-modal-title" className="modalTitle">
                  Choose document type
                </h3>
              </div>
              <div className="modalBody">
                <div>
                  <FormControl>
                    <InputLabel htmlFor="companyDropdown">Document Type</InputLabel>
                    <Select className="browser-default invoice">
                      <MenuItem value="INVOICE">Invoice</MenuItem>
                      <MenuItem value="RECEIPT">Receipt</MenuItem>
                      <MenuItem value="DEBIT_NOTE">Debit Note</MenuItem>
                      <MenuItem value="CREDIT_NOTE">Credit Note</MenuItem>
                      <MenuItem value="IMPORT_PERMIT">Import Permit</MenuItem>
                      {!isMobile && <MenuItem value="IMPORT_CSV">Invoice Listing (csv)</MenuItem>}
                      {!isMobile && <MenuItem value="OTHER">Others</MenuItem>}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <h5>Choose documents label</h5>
                  <div className="supply-purchase">
                    <Grid container spacing={2} direction="column" alignItems="center">
                      <Grid item xs={12}>
                        <ToggleButtonGroup size="small" exclusive>
                          <ToggleButton value="Supply">
                            <>Supply</>
                          </ToggleButton>
                          <ToggleButton value="Purchase">
                            <>Purchase</>
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div>
                  <h5> Add new labels</h5>
                </div>
              </div>
              <div className="modalFooter">
                <button className="btn cancelBtn">CANCEL</button>
                <button className="btn createBtn">UPLOAD</button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}
