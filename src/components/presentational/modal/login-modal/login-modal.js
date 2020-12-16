import React, { PureComponent } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./login-modal.style";
import { ModalType } from "../../../../constant";
import LoadQR from "./load-qr";
import MobileNumber from "./mobile-number";
import ValidateOtp from "./validate-otp";
import "./login-modal.scss";

class LoginModal extends PureComponent {
  handleClose = () => {
    const { closeModal, isModalRoute, history } = this.props;
    document.body.style.position = "";
    closeModal(ModalType.LOGIN);
    isModalRoute && history.goBack();
  };
  render() {
    const { classes, modal, otpSent, selectedText } = this.props;
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
          <div className="paper login-modal">
            <button className="closeBtn" onClick={this.handleClose}></button>
            <div id="transition-modal-description" className="modalContent">
              <div className="modalHeader">
                <h3 id="transition-modal-title" className="modalTitle">
                  Sign in {!!selectedText && "to " + selectedText}
                </h3>
              </div>
              <div className="modalBody" style={{ padding: 0, paddingTop: 40 }}>
                <LoadQR />
                <div className="orText"> Or</div>
                <div className="withMobileNumber">
                  <h3 className={classes.scanTitle}>With mobile number</h3>
                  {otpSent ? <ValidateOtp /> : <MobileNumber />}
                </div>
                <div className={classes.modalFooter}>
                  <p>
                    By continuing, I accept the{" "}
                    <a href="/terms-conditions">Terms & Conditions </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default withStyles(styles)(LoginModal);
