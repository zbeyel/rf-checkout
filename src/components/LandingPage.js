import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <InputGroup>
        <FormControl placeholder="Badge Number"></FormControl>{" "}
        <Link to="/Available_units">
          <Button>Submit</Button>
        </Link>
      </InputGroup>
    </div>
  );
}

export default LandingPage;
