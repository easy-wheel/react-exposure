import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { getExposureTrackerParamsProps } from "../../utils/exposure-tracker";
import "./index.css";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setList(data);
    }, 1000);
  }, []);

  return (
    <Card
      title="List Module"
      className="demo-list"
      {...getExposureTrackerParamsProps("list_expose")}
    >
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            className="demo-list-item"
            {...getExposureTrackerParamsProps("list_item_expose", {
              data: item,
            })}
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
