import React from "react";
import { Card, Button } from "react-bootstrap";

function UnitCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img></Card.Img>
          <Card.Title>Unit number</Card.Title>
          <Card.Text>Unit type</Card.Text>
        </Card.Body>
        <Button>Test</Button>
      </Card>
    </div>
  );
}

export default UnitCard;
