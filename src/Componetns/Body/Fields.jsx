import React, { Component, Fragment } from "react";
import Input from "../Inputs/Input";
import { Button } from "@material-ui/core";

class Fields extends Component {
  state = {
    isEmpty: true,
    fields: []
  };

  componentDidMount() {
    this.props.onInit().then(res => {
      this.setState({ fields: res, isEmpty: res.length === 0 });
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.onSave(e.target);
  }

  getFilteredResult(array, substring, contains) {
    return array
      .filter(v => v.id.includes(substring) === contains)
      .map((v, i) => {
        return (
          <Input
            key={`fields-input-${v.id}`}
            id={v.id}
            label={v.title}
            value={v.value}
          />
        );
      });
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <h2 style={{ margin: 10 }}>Имена</h2>
          {this.getFilteredResult(this.state.fields, "Name", true)}
          <h2 style={{ margin: 10 }}>Поля</h2>
          {this.getFilteredResult(this.state.fields, "Name", false)}

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

export default Fields;
