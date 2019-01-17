import React, { Component, Fragment } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button
} from "@material-ui/core";

class MessageDialog extends Component {
  state = {
    isOpen: false,
    title: "",
    message: ""
  };

  handleClose() {
    this.setState({
      ...this.state,
      isOpen: false
    });
  }

  handleOpen(title, message) {
    this.setState({
      isOpen: true,
      title: title.toString(),
      message: message.toString()
    });
  }

  render() {
    return (
      <Fragment>
        <Dialog
          aria-labelledby="customized-dialog-title"
          aria-describedby="alert-dialog-description"
          open={this.state.isOpen}
        >
          <DialogTitle id="customized-dialog-title">
            {this.state.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose.bind(this)}
              color="primary"
              autoFocus
            >
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default MessageDialog;
