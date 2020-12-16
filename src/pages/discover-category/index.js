import { connect } from "react-redux";
import { default as DiscoverCategory } from "./Discover-Category";
import { openModal } from "../../store";

const mapStateToProps = state => ({ discoverContentList: state.discover.discoverContentList, userDiscoverContentList: state.discover.userDiscoverContentList,
    isLoggedIn: state.auth.isLoggedIn });

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverCategory);
