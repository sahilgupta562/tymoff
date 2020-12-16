import React, { PureComponent } from "react";
import Parser from "html-react-parser";
import { Dialog, Slide } from "@material-ui/core";
import { ModalType ,Fonts} from "../../../../constant";
import "./show-more-detail-modal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class ShowMoreDetailModal extends PureComponent {
  handleClose = () => {
    const { closeModal, loadFromGrid, isOtherModalOpen, startScrollTimer, contentAlreadyVisited } = this.props;
    loadFromGrid && !isOtherModalOpen && !contentAlreadyVisited && startScrollTimer();
    closeModal(ModalType.SHOW_MORE_DETAIL);
  };

  render() {
    const { modal, activeContent } = this.props;
    const index = activeContent.id % Fonts.length;
    const font = Fonts[index];

    return (
      <Dialog
        open={modal}
        className="show-more-detail-modal"
        fullScreen
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="show-more-detail-title"
        aria-describedby="show-more-detail-description"
      >
        <div className="show-more-container">
          <div className="text-light2">
            <button className="back-btn" onClick={this.handleClose}>
              Back
            </button>
            <div className="textarea-light">
              <div className="image-text text-box-popup">
                <div>{activeContent.contentTitle}</div>
                <div className="description"  style={{ fontFamily: font, fontSize: 16}}>{Parser(activeContent.contentValue)}</div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}
