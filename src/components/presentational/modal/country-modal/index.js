import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as CountryModal } from "./country-modal";
import { openModal, closeModal, setFilterCountry, setLoginCountry, setFilter, getSelectedCountries, setCountryOnLogin, setSearchCountry, listSearchedCountries } from "../../../../store";

const mapStateToProps = state => ({
  modal: state.ui.modal.country || false,
  isModalRoute: state.ui.isModalRoute,
  countries: listSearchedCountries(state),
  modalAction: state.ui.modalAction,
  filter: state.content.filter,
  loginCountry: state.country.loginCountry,
  searchCountry: state.country.searchCountry,
  selectedCountries: getSelectedCountries(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  setFilterCountry: countryId => dispatch(setFilterCountry(countryId)),
  setLoginCountry: country => dispatch(setLoginCountry(country)),
  setCountryOnLogin: country => dispatch(setCountryOnLogin(country)),
  setFilter: filter => dispatch(setFilter(filter)),
  setSearchCountry: searchText => dispatch(setSearchCountry(searchText))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CountryModal));
