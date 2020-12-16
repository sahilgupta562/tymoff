import React, { PureComponent, Fragment } from "react";
import { indexOf } from "lodash";
import { ModalAction, ModalType, UploadStep } from "../../../constant";
import "./language-selector.scss";
import footerLine from "../../../assets/images/pbar2.png";

export default class LanguageSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prevSelectedLanguage: this.props.selectedLanguages,
      formValid: false
    };
  }

  onLanguageChange = id => {
    const { setFilterLanguage, setUploadLanguage, modalAction } = this.props;
    modalAction === ModalAction.FILTER && setFilterLanguage(id);
    modalAction === ModalAction.UPLOAD && setUploadLanguage(id);
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
    if (this.compare(this.state.prevSelectedLanguage, this.props.selectedLanguages)) {
      return false;
    } else {
      return true
    }
  }

  setLanguage = () => {
    const { filter, setFilter, modalAction, selectedLanguages, validateUploadLanguage, closeModal } = this.props;
    if (modalAction === ModalAction.FILTER) {
      setFilter({ ...filter, languagesList: selectedLanguages });
      closeModal(ModalType.LANGUAGE);
    }
    modalAction === ModalAction.FILTER && setFilter({ ...filter, languagesList: selectedLanguages });
    modalAction === ModalAction.UPLOAD && validateUploadLanguage();
  };

  render() {
    const { buttonText, languages, selectedLanguages, error, setSearchLanguage, searchLanguage, activeStep } = this.props;
    return (
      <div className="modalContent">
        <div className="modalHeader">
          <h3 id="transition-modal-title" className="modalTitle">
            Select Language
          </h3>
        </div>
        <div className="modalBody">
          <div className="search-language">
            <input type="text" placeholder="Search" value={searchLanguage} onChange={e => setSearchLanguage(e.target.value)} />
          </div>
          <div className="language-container c-height">
            {!!!languages.length && (
              <div className="no-content">
                <p>Entered language is not in the list. Please select from the available option.</p>
              </div>
            )}
            {languages.map((language, index) => (
              <Fragment key={`${index}_language`}>
                <input
                  type="checkbox"
                  name="language_check"
                  checked={indexOf(selectedLanguages, language.id) !== -1}
                  onChange={() => this.onLanguageChange(language.id)}
                  id={`${index}_languageInput`}
                />
                <label className="language-label col " htmlFor={`${index}_languageInput`}>
                  {language.nameUtf8}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="modalFooter">
          <button className="btn submit form-control" disabled={!this.state.formValid && buttonText !== 'Next'} onClick={this.setLanguage}>
            {buttonText}
          </button>
          <span className="error">{error}</span>
          {activeStep === UploadStep.LANGUAGE && <div className="pbar">
            <img src={footerLine} alt="" />
          </div>}
        </div>
      </div>

    );
  }
}
