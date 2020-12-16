import React, { PureComponent, Fragment } from "react";
import { keys } from "lodash";
import { Table, FileContextMenu } from "../../containers";
import "./document-listing.scss";

class DocumentListing extends PureComponent {
  render() {
    const { invoices, receipts, importPermits, debitNotes, creditNotes } = this.props;
    return (
      <Fragment>
        {!!invoices.length && (
          <div style={{ height: "200px", width: "100%" }} className="table-container">
            <Table data={invoices} columns={keys(invoices[0])} />
          </div>
        )}
        {!!receipts.length && (
          <div style={{ height: "200px", width: "100%" }} className="table-container">
            <Table data={receipts} columns={keys(receipts[0])} />
          </div>
        )}
        {!!importPermits.length && (
          <div style={{ height: "200px", width: "100%" }} className="table-container">
            <Table data={importPermits} columns={keys(importPermits[0])} />
          </div>
        )}
        {!!debitNotes.length && (
          <div style={{ height: "200px", width: "100%" }} className="table-container">
            <Table data={debitNotes} columns={keys(debitNotes[0])} />
          </div>
        )}
        {!!creditNotes.length && (
          <div style={{ height: "200px", width: "100%" }} className="table-container">
            <Table data={creditNotes} columns={keys(creditNotes[0])} />
          </div>
        )}
        <FileContextMenu />
      </Fragment>
    );
  }
}

export default DocumentListing;
