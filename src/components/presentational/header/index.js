import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Header } from "./header";
import { loadFolder, loadAuth, loadCompany } from "../../../store";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loadFolder: () => dispatch(loadFolder()),
  loadAuth: () => dispatch(loadAuth()),
  loadCompany: () => dispatch(loadCompany())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
