import { connect } from "react-redux";
import { default as PublishAll } from "./publish-all";
import { uploadContentDataList } from "../../../../../store";

const mapStateToProps = (state) => ({
  contents: state.upload.contentPreview,
  isLoading: state.upload.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  uploadContentDataList: () => dispatch(uploadContentDataList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublishAll);
