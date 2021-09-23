import React from "react";
import { Col, Row } from "react-bootstrap";
import UnitCard from "./UnitCard";

function UnitContainer() {
  return (
    <>
      <Row>
        <Col>
          <UnitCard></UnitCard>
        </Col>
        <Col>
          <UnitCard></UnitCard>
        </Col>
      </Row>
    </>
  );
}

export default UnitContainer;
