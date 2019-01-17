import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Fab } from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Functions extends Component {
  handleOnChangeFileUpload(e) {
    if (e.target.value) {
      const file = e.target.files[0];
      e.target.value = "";
      this.props.onSendFile(file).then(res => {
        console.log("handleOnChangeFileUpload");
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          // direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={4}>
            <div style={{ margin: 15 }}>
              {/* <Paper className={classes.paper}> */}
              <input
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={e => {
                  this.handleOnChangeFileUpload(e);
                }}
              />
              <label htmlFor="contained-button-file">
                <Fab
                  variant="extended"
                  component="span"
                  size="medium"
                  color="primary"
                  aria-label="Add"
                  className={classes.margin}
                >
                  <NavigationIcon className={classes.extendedIcon} />
                  Загрузить файл
                </Fab>
              </label>
              {/* </Paper> */}
            </div>
          </Grid>
          <Grid item xs={8}>
            {/* <Paper className={classes.paper}> */}
            {this.props.children}
            {/* </Paper> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Functions);
