import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UnitCard({
  status,
  unitNumber = "Unit Number",
  unitType = "Unit Type",
}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img></Card.Img>
          <Card.Title>{unitNumber}</Card.Title>
          <Card.Text>{unitType}</Card.Text>
          <Link to="/">
            {
              //Toggles whether the equipment is available for checkout
              // TODO add return equipment funtion when clicked for disabled button
              status ? (
                <Button>Check out</Button>
              ) : (
                <Button disabled>Return</Button>
              )
            }
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
