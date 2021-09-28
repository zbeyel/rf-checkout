import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UnitCard({ status }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img></Card.Img>
          <Card.Title>Unit number </Card.Title>
          <Card.Text>Unit type</Card.Text>
          <Link to="/">
            {status ? (
              <Button>Check out</Button>
            ) : (
              <Button disabled>Check out</Button>
            )}
          </Link>
          <Link to="/issues">
            <Button variant="danger">Submit Issue</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default UnitCard;
