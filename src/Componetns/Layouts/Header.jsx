import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="headline"
              color="inherit"
              style={{ flexGrow: 1 }}
            >
              Формирование квитанций
            </Typography>
            <Button
              onClick={this.props.onRefresh}
              color="inherit"
              variant="outlined"
            >
              Обновить
            </Button>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default Header;
