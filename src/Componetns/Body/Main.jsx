import React, { Component } from "react";
import { Paper, Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import Fields from "./Fields";
import Functions from "./Functions";
import SettingService from "../../Service/SettingService";
import EntityDataHandler from "../../Util/EntityDataHandler";
import CommonHelper from "../../Util/CommonHelper";
import LoadDialog from "../Dialogs/LoadDialog";
import MainFieldService from "../../Service/MainFieldService";
import FunctionService from "../../Service/FunctionService";
import MessageDialog from "../Dialogs/MessageDialog";
import Decorator from "../../Util/Decorator";
import StandartTable from "../Tables/StandartTable";
import Form from "./Form";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class Main extends Component {
  state = {
    value: 0,
    isLoading: false,
    isMessageDialogShown: false
  };

  componentDidMount() {
    new SettingService().get();
  }

  handleChangeTab = (event, value) => {
    this.setState({
      ...this.state,
      value: value
    });
  };

  async handleInitSetting() {
    const result = await this.addLoadEffectWithRuturn(async () => {
      const returned = await this.addErrorHandling(async () => {
        const result = await new SettingService().getFromLocalStorage();
        const settings = EntityDataHandler.getEntityDataArray(
          result,
          this.props.settings
        );
        return settings;
      });
      return returned;
    });

    return result || [];
  }

  async handleOnSaveSetting(form) {
    this.addLoadEffect(async () => {
      await this.addErrorHandling(async () => {
        const formData = CommonHelper.serialize(form);
        await new SettingService().set(formData);
      });
    }, true);
  }

  async handleInitMainFields() {
    const result = await this.addLoadEffectWithRuturn(async () => {
      const returned = await this.addErrorHandling(async () => {
        const result = await new MainFieldService().getFromLocalStorage();
        const mainFields = EntityDataHandler.getEntityDataArray(
          result,
          this.props.mainFields
        );
        return mainFields;
      });
      return returned;
    });

    return result || [];
  }

  async handleOnSaveMainFields(form) {
    this.addLoadEffect(async () => {
      await this.addErrorHandling(async () => {
        const formData = CommonHelper.serialize(form);
        await new MainFieldService().set(formData);
      });
    }, true);
  }

  async handleOnSendFileFunstions(file) {
    this.addLoadEffect(async () => {
      await this.addErrorHandling(async () => {
        const data = await new FunctionService().getTableData(file);
        this.refs.funcTalble.fill(data);
        await new FunctionService().createPdf(file);
      });
    });
  }

  showMessage(title, message) {
    this.refs.messageDialog.handleOpen(title, message);
  }

  showLoadDialog(open) {
    if (open) {
      this.refs.loadDialog.handleOpen();
    } else {
      this.refs.loadDialog.handleClose();
    }
  }

  addLoadEffect(func, withDelay) {
    Decorator.decorateWithBeforAndAfter(
      func,
      () => this.showLoadDialog(true),
      () =>
        withDelay
          ? Decorator.decorateWithDelay(() => this.showLoadDialog(false))
          : this.showLoadDialog(false)
    );
  }

  addLoadEffectWithRuturn(func) {
    return Decorator.decorateWithBeforAndAfterAndReturn(
      func,
      () => this.showLoadDialog(true),
      () => this.showLoadDialog(false)
    );
  }

  async addErrorHandling(func) {
    return await Decorator.decorateWithErrorHandling(
      func,
      this.showMessage.bind(this),
      "Ошибка"
    );
  }

  render() {
    const { value } = this.state;

    return (
      <Paper>
        <LoadDialog ref="loadDialog" title="Обработка запроса..." />
        <MessageDialog ref="messageDialog" />
        <Tabs
          value={value}
          onChange={this.handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {this.props.munuItems.map((v, i) => (
            <Tab key={i} label={v} />
          ))}
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <Form
              name="settings"
              onInit={this.handleInitSetting.bind(this)}
              onSave={this.handleOnSaveSetting.bind(this)}
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Fields
              onInit={this.handleInitMainFields.bind(this)}
              onSave={this.handleOnSaveMainFields.bind(this)}
            />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <Functions onSendFile={this.handleOnSendFileFunstions.bind(this)}>
              <StandartTable
                headers={FunctionService.getTextTableHeaders()}
                innerRef={node => {
                  this.refs.funcTalble = node;
                }}
              />
            </Functions>
          </TabContainer>
        )}
      </Paper>
    );
  }
}

export default Main;
