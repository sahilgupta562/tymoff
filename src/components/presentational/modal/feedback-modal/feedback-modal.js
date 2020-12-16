import React, { PureComponent } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./feedback-modal.scss";

class FeedbackModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
    };
  }
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.FEEDBACK);
  };

  handleSubmit = () => {
    const { sendFeedback } = this.props;
    sendFeedback();
  };

  handleChange = (event) => {
    event.preventDefault();
    setTimeout(() => {
      this.setState({ formValid: this.validateForm() });
    }, 100);
  }
  validateForm = () => {
    if (this.props.title === '' || this.props.description === '') {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { modal, description, title, setFeedbackTitle, setFeedbackDescription, error } = this.props;
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
          <div className="paper feedback-modal">
            <button className="closeBtn mobile-hidden" onClick={this.handleClose}></button>
            <button className="back-btn tab-hidden" onClick={this.handleClose}></button>
            <div className="modalContent">
              <div className="modalHeader">
                <h3 id="transition-modal-title" className="modalTitle">
                  Feedback
                </h3>
              </div>
              <div className="modalBody">
                <div className="description">
                  <input type="text" name="title" placeholder="Add title" autoComplete="off" value={title} onChange={event => { setFeedbackTitle(event.target.value); this.handleChange(event) }} />
                  <br />
                  <textarea rows="5" name="description" placeholder="Write your feedback" value={description} onChange={event => { setFeedbackDescription(event.target.value); this.handleChange(event) }}></textarea>
                </div>
              </div>
              <span className="error">{error}</span>
              <div className="modalFooter">
                <button className="submit" disabled={!this.state.formValid} onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default FeedbackModal;
