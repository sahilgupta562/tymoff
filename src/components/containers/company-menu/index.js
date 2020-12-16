import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as CompanyMenu } from "./company-menu";
import { openModal, setCompanyListingMenuPosition } from "../../../store";

const mapStateToProps = state => ({
  selectedCompany: state.company.selectedCompany
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  setCompanyListingMenuPosition: position => dispatch(setCompanyListingMenuPosition(position))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyMenu));
