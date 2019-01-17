import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    margin: 20,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class Input extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  };

  state = {
    value: this.props.value
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <TextField
        id={this.props.id}
        value={this.state.value}
        label={this.props.label}
        margin="normal"
        className={classes.textField}
        onChange={this.handleChange}
        name="serializable"
      />
    );
  }
}

export default withStyles(styles)(Input);
