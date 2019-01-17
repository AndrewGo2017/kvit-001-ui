import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  formControl: {
    margin: 20,
    minWidth: 200
  }
});

class UsualSelect extends React.Component {
  state = {
    value: this.props.value,
    open: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel>
        <Select
          open={this.state.open}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          value={this.state.value}
          onChange={this.handleChange}
          inputProps={{
            name: "value",
            id: this.props.id,
            serializable: "true"
          }}
          name="serializable"
        >
          {this.props.options.map((v, i) => {
            return (
              <MenuItem key={`menuItem-${v.value}`} value={v.value}>
                {v.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
}

UsualSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UsualSelect);
