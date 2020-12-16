import React, { PureComponent } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default class MessageSnackbar extends PureComponent {
  handleClose = () => {
    const { closeSnackbar } = this.props;
    closeSnackbar();
  };

  render() {
    const { message, snackbar } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={snackbar}
        autoHideDuration={1500}
        onClose={this.handleClose}
      >
        <Alert elevation={6} variant="filled" onClose={this.handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    );
  }
}
