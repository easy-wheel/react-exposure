import React, { useState } from "react";
import { Button, Modal } from "antd";
import { List, Tab } from "./components";
import {
  getExposureTrackerPageParamsProps,
  getExposureTrackerParamsProps,
} from "./utils/exposure-tracker";
import "./style.css";

export default function App() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  const handleModalCancel = () => {
    setVisible(false);
  };

  return (
    <div {...getExposureTrackerPageParamsProps({ pageData: "some page data" })}>
      <Button onClick={handleClick}>show modal</Button>
      <List />
      <Tab />
      <Modal visible={visible} onCancel={handleModalCancel}>
        <div
          {...getExposureTrackerParamsProps("modal_content_expose", {
            modalData: "xxx",
          })}
        >
          modal content
        </div>
      </Modal>
    </div>
  );
}
