import React, { Component, Fragment } from "react";
import { FORM_ELEMENT_TYPE } from "../../Util/FormElementType";
import Input from "../Inputs/Input";
import { Button } from "@material-ui/core";
import UsualSelect from "../Selects/UsualSelect";

class Form extends Component {
  state = {
    tableData: [],
    isEmpty: true
  };

  componentDidMount() {
    this.props.onInit().then(res => {
      this.setState({
        tableData: res,
        isEmpty: res.length === 0
      });
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.onSave(e.target);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleOnSubmit.bind(this)} autoComplete="off">
          {this.state.tableData.map((v, i) => {
            if (v.type === FORM_ELEMENT_TYPE.INPUT_TEXT) {
              return (
                <Input
                  key={`${this.props.name}-input-${v.id}`}
                  id={v.id}
                  label={v.title}
                  value={v.value}
                />
              );
            } else {

              return (
                <UsualSelect
                  key={`${this.props.name}-select-${v.id}`}
                  id={v.id}
                  label={v.title}
                  value={v.value}
                  options={v.options}
                />
              );
            }
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

export default Form;
