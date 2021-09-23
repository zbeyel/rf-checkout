import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Button>
        <Link to="/Available_units"> About</Link>
      </Button>
    </div>
  );
}

export default LandingPage;
