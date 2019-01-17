import React, { Component, Fragment } from "react";
import Input from "../Inputs/Input";
import { Button } from "@material-ui/core";

class Settings extends Component {
  state = {
    settings: [],
    isEmpty: false
  };

  componentDidMount() {
    this.props.onInit().then(res => {
      this.setState({
        settings: res,
        isEmpty: res.length === 0
      });
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.onSave(e.target);
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleOnSubmit.bind(this)} autoComplete="off">
          {this.state.settings.map((v, i) => {
            return (
              <Input
                key={`setting1-input-${v.id}`}
                id={v.id}
                label={v.title}
                value={v.value}
              />
            );
          })}

          <div>
            {this.state.isEmpty ? null : (
              <Button
                style={{ margin: 15 }}
                variant="outlined"
                color="primary"
                type="submit"
              >
                Сохранить
              </Button>
            )}
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Settings;
