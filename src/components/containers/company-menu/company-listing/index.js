import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as CompanyListing } from "./company-listing";
import { closeModal, setSelectedCompany } from "../../../../store";

const mapStateToProps = state => ({
  companyList: state.company.data,
  selectedCompany: state.company.selectedCompany,
  modal: state.ui.modal.company_listing_menu || false,
  mouseX: state.ui.companyListingMenuPosition.mouseX,
  mouseY: state.ui.companyListingMenuPosition.mouseY
});

const mapDispatchToProps = dispatch => ({
  closeModal: modal => dispatch(closeModal(modal)),
  setSelectedCompany: company => dispatch(setSelectedCompany(company))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyListing));
