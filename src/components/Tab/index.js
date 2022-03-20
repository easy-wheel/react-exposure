import React from "react";
import { Card, Tabs } from "antd";
import { getExposureTrackerParamsProps } from "../../utils/exposure-tracker";

const { TabPane } = Tabs;

export default function Tab() {
  return (
    <Card {...getExposureTrackerParamsProps("tab_module_expose")}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          <div
            {...getExposureTrackerParamsProps("tab_pane_expose", {
              tabIndex: 1,
            })}
          >
            Content of Tab Pane 1
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <div
            {...getExposureTrackerParamsProps("tab_pane_expose", {
              tabIndex: 2,
            })}
          >
            Content of Tab Pane 2
          </div>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <div
            {...getExposureTrackerParamsProps("tab_pane_expose", {
              tabIndex: 3,
            })}
          >
            Content of Tab Pane 3
          </div>
        </TabPane>
      </Tabs>
    </Card>
  );
}
