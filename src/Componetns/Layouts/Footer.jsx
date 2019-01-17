import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default ({ munuItems, onSelect }) => (
  <Paper>
    <Tabs
      value={0}
      onChange={onSelect}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      {munuItems.map((v, i) => (
        <Tab label={v} />
      ))}
    </Tabs>
  </Paper>
);
