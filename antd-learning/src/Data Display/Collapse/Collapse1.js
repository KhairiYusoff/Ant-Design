import { CaretRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Collapse, theme } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const activePanelHeaderStyle = {
  color: "red", // Or any color you wish for the active state
};

const inactivePanelHeaderStyle = {
  color: "black", // Or any color you wish for the inactive state
};

const activePanelContentStyle = {
  color: "red", // Or any color you wish for the active state
};

const inactivePanelContentStyle = {
  color: "black", // Or any color you wish for the inactive state
};

const getItems = (panelStyle, activeKey) => [
  {
    key: "1",
    label: (
      <div
        style={
          activeKey.includes("1")
            ? activePanelHeaderStyle
            : inactivePanelHeaderStyle
        }
      >
        This is panel header 1
      </div>
    ),
    children: (
      <div
        style={
          activeKey.includes("1")
            ? activePanelContentStyle
            : inactivePanelContentStyle
        }
      >
        {text}
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: (
      <div
        style={
          activeKey.includes("2")
            ? activePanelHeaderStyle
            : inactivePanelHeaderStyle
        }
      >
        This is panel header 2
      </div>
    ),
    children: (
      <div
        style={
          activeKey.includes("2")
            ? activePanelContentStyle
            : inactivePanelContentStyle
        }
      >
        {text}
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: (
      <div
        style={
          activeKey.includes("3")
            ? activePanelHeaderStyle
            : inactivePanelHeaderStyle
        }
      >
        This is panel header 3
      </div>
    ),
    children: (
      <div
        style={
          activeKey.includes("3")
            ? activePanelContentStyle
            : inactivePanelContentStyle
        }
      >
        {text}
      </div>
    ),
    style: panelStyle,
  },
];
const Collapse1 = () => {
  const [activeKey, setActiveKey] = useState(["1"]);
  const onChange = (key) => {
    console.log(key);
    setActiveKey(key);
  };

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle, activeKey)}
      onChange={onChange}
      activeKey={activeKey}
    />
  );
};
export default Collapse1;
