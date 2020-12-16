import React, { PureComponent } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ModalType, ModalAction } from "../../../../constant";
import { indexOf } from "lodash";
import "./country-modal.scss";

class CountryModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prevSelectedCountries: this.props.selectedCountries,
      formValid: false
    };
  }
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.COUNTRY);
  };

  onCountryChange = (id, isoCode, diallingCode) => {
    const { setFilterCountry, modalAction, setLoginCountry } = this.props;
    modalAction === ModalAction.FILTER && setFilterCountry(id);
    modalAction === ModalAction.LOGIN && setLoginCountry({ countryCode: isoCode, callingCode: `+${diallingCode}` });
    setTimeout(() => {
      this.setState({ formValid: this.validateForm() });
    }, 100);
  };

  compare = (arr1, arr2) => {
    const sorted1 = arr1.length ? arr1.sort() : arr1;
    const sorted2 = arr2.length ? arr2.sort() : arr2;
    if (JSON.stringify(sorted1) == JSON.stringify(sorted2)) {
      return true;
    }
    else {
      return false;
    }
  }
  validateForm = () => {
    if (this.compare(this.state.prevSelectedCountries, this.props.selectedCountries)) {
      return false;
    } else {
      return true
    }
  }


  setCountry = () => {
    const { filter, setFilter, modalAction, loginCountry, setCountryOnLogin, selectedCountries } = this.props;
    modalAction === ModalAction.FILTER && setFilter({ ...filter, countriesList: selectedCountries });
    modalAction === ModalAction.LOGIN && setCountryOnLogin(loginCountry);
    this.handleClose();
  };

  render() {
    const { modal, countries, selectedCountries, searchCountry, setSearchCountry } = this.props;
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
          <div className="paper country-modal">
            <button className="closeBtn mobile-hidden" onClick={this.handleClose}></button>
            <button className="back-btn tab-hidden" onClick={this.handleClose}></button>
            <div className="modalContent">
              <div className="modalHeader">
                <h3 id="transition-modal-title" className="modalTitle">
                  Select Country
                </h3>
              </div>
              <div className="modalBody">
                <div className="search-country">
                  <input type="text" placeholder="Search" value={searchCountry} onChange={e => setSearchCountry(e.target.value)} />
                </div>
                <div className="country-container c-height">
                  {countries.length === 0 && <div className="no-content"><p>Entered country is not in the list. Please select from the available option.</p></div>}
                  {countries.map((country, index) => (
                    <React.Fragment key={`${index}_country`}>
                      <input
                        type="checkbox"
                        name="country_check"
                        checked={indexOf(selectedCountries, country.id) !== -1}
                        onChange={() => this.onCountryChange(country.id, country.isoCode, country.diallingCode)}
                        id={`${index}_countryInput`}
                      />
                      <label className="country-label col " htmlFor={`${index}_countryInput`}>
                        {country.name}
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="modalFooter">
                <button onClick={this.setCountry} disabled={!this.state.formValid} className="btn submit form-control">
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

export default CountryModal;
