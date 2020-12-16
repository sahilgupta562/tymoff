import { connect } from "react-redux";
import { default as ProfileImage } from "./Profile-Image";
import { openModal, setShareType, setShareLink } from "../../store";

const mapStateToProps = state => ({ picUrl: state.auth.data.picUrl || "", isImageLoading: state.auth.isImageLoading });

const mapDispatchToProps = dispatch => ({ openModal: modal => dispatch(openModal(modal)), setShareType: type => dispatch(setShareType(type)), setShareLink: link => dispatch(setShareLink(link)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImage);
