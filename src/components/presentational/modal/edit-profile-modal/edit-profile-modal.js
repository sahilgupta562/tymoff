import React, { PureComponent } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { ButtonBase } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import { ModalType } from "../../../../constant";
import { ProfileImage } from "../../../containers";
import "./edit-profile-modal.scss";

class EditProfileModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
    };
  }

  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.EDIT_PROFILE);
  };

  handleOnChange = e => {
    const { user, editUserInfo } = this.props;
    editUserInfo({ ...user, [e.target.name]: e.target.value });
    setTimeout(() => {
      this.setState({ formValid: this.validateForm() });
    }, 100);
  };

  validateForm = () => {
    const { user } = this.props;
    if (user.name === '' || user.phone === '' || user.countryId === '' || user.languageId === '') {
      return false;
    } else {
      return true;
    }
    //return Object.values(user).every(x => (x === null && x === ''));
  }

  handleSubmit = () => {
    const { updateProfile } = this.props;
    updateProfile();
  };

  handleMoreOptions = () => {
    const { openModal } = this.props;
    openModal(ModalType.PROFILE_IMAGE_OPTION);
  }

  render() {
    const { modal, user, languages, countries, error, isLoading } = this.props;
    const selectedCountry = countries.filter(country => country.id === parseInt(user.countryId));
    const countryCode = selectedCountry.length ? selectedCountry[0].diallingCode : '';
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
          <div className="paper editProfileModal">
            <button className="closeBtn mobile-hidden" onClick={this.handleClose}></button>
            <button className="back-btn tab-hidden" onClick={this.handleClose}></button>
            <div className="modalContent">
              <div className="modalHeader tab-hidden">
                <h2 className="modalTitle">Edit Profile</h2>
              </div>
              <div className="modalBody">
                <ProfileImage />
                <div className="change-profile">
                  <ButtonBase onClick={this.handleMoreOptions} >Change Profile Photo
                </ButtonBase>
                </div>
                <div className="edit-profile-modal-input">
                  <div className="form-group fl-50">
                    <label htmlFor="fullname">Name</label>
                    <input type="text" placeholder="Enter Name" maxLength={40} name="name" value={user.name} onChange={this.handleOnChange} />
                  </div>
                  <div className="form-group fr-50">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Email" name="email" value={user.email} onChange={this.handleOnChange} />
                  </div>
                  <div className="form-group fl-50">
                    <label htmlFor="language">Select Language</label>
                    <select name="languageId" value={user.languageId} onChange={this.handleOnChange}>
                      <option value="">Select a Language</option>
                      {languages.map((language, index) => (
                        <option key={language.id || index} value={language.id}>
                          {language.nameUtf8}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group fr-50">
                    <label htmlFor="Country">Select Country</label>
                    <select name="countryId" value={user.countryId} onChange={this.handleOnChange}>
                      <option value="">Select Country</option>
                      {countries.map((country, index) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group fl-50 contact">
                    <label htmlFor="contactNumber">Phone Number</label>
                    <p>(+{countryCode})</p>
                    <input type="text" name="phone" readOnly style={{ width: "calc(100% - 20%)" }} defaultValue={user.phone} />
                  </div>
                  <div className="form-group fr-50">
                    <label htmlFor="dob">Gender</label>
                    <select name="gender" value={user.gender} onChange={this.handleOnChange}>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  <span className="error">{error}</span>
                </div>
                <button className="btn submit form-control tab-hidden" disabled={isLoading} onClick={this.handleSubmit}>
                  Save
                </button>
              </div>
              <div className="modalFooter mobile-hidden">
                <button className="btn submit form-control" disabled={isLoading} onClick={this.handleSubmit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default EditProfileModal;
