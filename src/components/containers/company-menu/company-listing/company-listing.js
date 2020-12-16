import React, { PureComponent } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { ModalType } from "../../../../constant";
import "./company-listing.scss";

export default class CompanyListing extends PureComponent {
  handleClose = () => {
    const { closeModal } = this.props;
    closeModal(ModalType.COMPANY_LISTING_MENU);
  };
  handleCompanyChange = (company) => {
    const { setSelectedCompany } = this.props;
    setSelectedCompany(company);
    this.handleClose();
  };
  render() {
    const { modal, companyList, mouseX, mouseY, selectedCompany } = this.props;
    return (
      <Menu
        id="company-listing"
        anchorReference="anchorPosition"
        anchorPosition={mouseY !== null && mouseX !== null ? { top: mouseY, left: mouseX } : undefined}
        keepMounted
        open={modal}
        onClose={this.handleClose}
      >
        {!!companyList.length &&
          companyList.map((company, index) => (
            <MenuItem key={index} selected={company.companyID === selectedCompany.companyID} onClick={() => this.handleCompanyChange(company)}>
              {company.name}
            </MenuItem>
          ))}
      </Menu>
    );
  }
}
