import React, { PureComponent, Fragment } from "react";
import { ButtonBase } from "@material-ui/core";
import { default as CompanyListng } from "./company-listing";
import { ModalType } from "../../../constant";
import "./company-menu.scss";

export default class CompanyMenu extends PureComponent {
  handleCompanyChange = event => {
    const { setCompanyListingMenuPosition, openModal } = this.props;
    setCompanyListingMenuPosition({ mouseX: event.clientX - 2, mouseY: event.clientY - 4 });
    openModal(ModalType.COMPANY_LISTING_MENU);
  };

  render() {
    const { selectedCompany } = this.props;
    return (
      <Fragment>
        <div className="company-menu">
          <ButtonBase className="change-companybtn" onClick={event => this.handleCompanyChange(event)}>
            Click here to change Company
          </ButtonBase>
          <button className="company-dropdownbtn">{selectedCompany.name}</button>
        </div>
        <CompanyListng />
      </Fragment>
    );
  }
}
