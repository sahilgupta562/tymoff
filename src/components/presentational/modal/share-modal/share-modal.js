import React, { PureComponent } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
} from "react-share";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./share-modal.style";
import { ModalType, ShareType } from "../../../../constant";
import "./share-modal.scss";
class ShareModal extends PureComponent {
  constructor(props) {
    super(props);
    const { loadShareLink, shareType } = props;
    if (ShareType.CONTENT === shareType) loadShareLink();
  }

  handleClose = () => {
    const { closeModal, isContentDetailOpen, startScrollTimer, contentAlreadyVisited, commentBox } = this.props;
    isContentDetailOpen && !commentBox && !contentAlreadyVisited && startScrollTimer();
    closeModal(ModalType.SHARE);
  };

  render() {
    const { classes, modal, shareLink } = this.props;
    // const newShareLink="Let's take some tymoff \n \n" +shareLink
    // const title = "Let's take some tymoff \n \n";
    const title = "Trending on tymoff \n \n";

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
          <div className="paper share-modal" style={{ maxWidth: 320, minHeight: 330, zIndex: 1300 }}>
            {/* <button className="closeBtn" onClick={this.handleClose}></button> */}
            <div className="modalContent share-modal-icon">
              <div className="modalHeader">
                <h3 id="transition-modal-title" className="modalTitle">
                  Choose a way to share
                </h3>
              </div>
              <div className="modalBody" style={{ paddingTop: "0" }}>
                <div className={classes.redioBtn}>
                  <FacebookShareButton url={shareLink} quote={title} className={classes.shareButton}>
                    <FacebookIcon size={32} round />
                    <span style={{ paddingLeft: "10px" }}>Facebook</span>
                  </FacebookShareButton>
                </div>
                <div className={classes.redioBtn}>
                  <TwitterShareButton url={shareLink} title={title} className={classes.shareButton}>
                    <TwitterIcon size={32} round />
                    <span style={{ paddingLeft: "10px" }}>Twitter</span>
                  </TwitterShareButton>
                </div>
                <div className={classes.redioBtn}>
                  <WhatsappShareButton url={shareLink} title={title} separator="" className={classes.shareButton}>
                    <WhatsappIcon size={32} round />
                    <span style={{ paddingLeft: "10px" }}> Whatsapp</span>
                  </WhatsappShareButton>
                </div>
                <div className={classes.redioBtn}>
                  <LinkedinShareButton url={shareLink} title={title} windowWidth={750} windowHeight={600} className={classes.shareButton}>
                    <LinkedinIcon size={32} round />
                    <span style={{ paddingLeft: "10px" }}> Linkedin</span>
                  </LinkedinShareButton>
                </div>
                <div className={classes.redioBtn}>
                  <PinterestShareButton url={shareLink} media={shareLink} windowWidth={1000} windowHeight={730} className={classes.shareButton}>
                    <PinterestIcon size={32} round />
                    <span style={{ paddingLeft: "10px" }}>Pinterest</span>
                  </PinterestShareButton>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default withStyles(styles)(ShareModal);
