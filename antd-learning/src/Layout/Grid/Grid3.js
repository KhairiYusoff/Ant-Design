import React from "react";
import { Col, Row } from "antd";
const style = {
  background: "#009211",
  padding: "8px 0",
};
const Grid3 = () => (
  <>
    <Row>
      <Col style={style} span={8}>
        col-8
      </Col>
      <Col style={style} span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col style={style} span={6}>
        col-6 col-offset-6
      </Col>
      <Col style={style} span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col style={style} span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </>
);
export default Grid3;
