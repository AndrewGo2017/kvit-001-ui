import React, { Component, Fragment } from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import IndeterminateLinearPropgress from "../Progresses/IndeterminateLinearPropgress";

class LoadDialog extends Component {
  state = {
    isOpen: false,
    title: "",
    message: ""
  };

  handleClose() {
    this.setState({
      isOpen: false
    });
  }

  handleOpen() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    return (
      <Fragment>
        <Dialog
          aria-labelledby="customized-dialog-title"
          open={this.state.isOpen}
        >
          <DialogTitle id="customized-dialog-title">
            {this.props.title}
          </DialogTitle>
          <DialogContent>
            <IndeterminateLinearPropgress />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default LoadDialog;
