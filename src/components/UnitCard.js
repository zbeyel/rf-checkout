import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UnitCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img></Card.Img>
          <Card.Title>Unit number</Card.Title>
          <Card.Text>Unit type</Card.Text>
          <Link to="/">
            <Button>Check out</Button>
          </Link>
          <Link to="/issues">
            <Button variant="danger">Submit Issue</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UnitCard;
