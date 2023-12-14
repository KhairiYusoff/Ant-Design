import React from "react";
import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";
import { Space } from "antd";
const App = () => (
  <Space>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="blue" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </Space>
);
export default App;
