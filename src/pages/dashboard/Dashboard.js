import React, { PureComponent, Fragment } from "react";
import { CircularProgress } from "@material-ui/core";
import { DocumentListing } from "../../components";
import "./dashboard.scss";

class Dashboard extends PureComponent {
  render() {
    const { isLoading } = this.props;
    return (
      <Fragment>
        <p className="all-documents-title">All Documents</p>
        {!isLoading && <DocumentListing />}
        {isLoading && <CircularProgress />}
      </Fragment>
    );
  }
}

export default Dashboard;
