import React from "react";
import { Col, Row } from "react-bootstrap";
import UnitCard from "./UnitCard";

function UnitContainer() {
  return (
    <>
      <Row>
        <Col>
          <UnitCard status={true} unitType="MC3031" unitNumber="57HH" />
        </Col>
        <Col>
          <UnitCard status={false} />
        </Col>
      </Row>
    </>
  );
}

export default UnitContainer;
