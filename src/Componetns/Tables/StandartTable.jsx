import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class StandartTable extends Component {
  state = {
    data: []
  };

  fill(data) {
    this.setState({
      data
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {this.props.headers.map((v, i) => {
                return (
                  <TableCell key={i} align="right">
                    {v}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((v, i) => {
              return (
                <TableRow key={i}>
                  {v.map((v1, i1) => {
                    return (
                      <TableCell key={i1} align="right">
                        {v1[1]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

StandartTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StandartTable);
