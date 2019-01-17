import React, { Component, Fragment } from "react";
import { Header } from "./Layouts/index";
import Main from "./Body/Main";
import { munuItems, mainFields, settings } from "../data";
import ErrorBoundary from "./ErrorBoudary";
import { entities } from "../data";

export default class extends Component {
  refresh() {
    for (let i = 0; i < entities.length; i++) {
      localStorage.removeItem(entities[i]);
    }
    this.forceUpdate();
  }

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <Header onRefresh={this.refresh.bind(this)} />
          <Main
            munuItems={munuItems}
            mainFields={mainFields}
            settings={settings}
          />
          {/* <Footer  /> */}
        </ErrorBoundary>
      </Fragment>
    );
  }
}
