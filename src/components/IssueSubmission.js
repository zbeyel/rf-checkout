import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function IssueSubmission() {
  const history = useHistory();
  return (
    <div>
      <FormGroup>
        <Form.Label>Check all that apply</Form.Label>
        <Form.Check type="checkbox" label="Unresponsive"></Form.Check>
        <Form.Check type="checkbox" label="Issue with screen"></Form.Check>
        <Form.Check type="checkbox" label="Issue with buttons"></Form.Check>
        <Form.Check type="checkbox" label="Issue with scanner"></Form.Check>
        <Form.Check type="checkbox" label="Other (explain below)"></Form.Check>
        <br />
        <Form.Label>Extra Notes:</Form.Label>
        <Form.Control as="textarea" rows={3}></Form.Control>
        <br />
        <Link to="/">
          <Button>Submit</Button>
        </Link>

        <Button variant="danger" onClick={history.goBack}>
          Cancel
        </Button>
      </FormGroup>
    </div>
  );
}

export default IssueSubmission;
