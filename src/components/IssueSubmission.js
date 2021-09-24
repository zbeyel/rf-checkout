import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

function IssueSubmission() {
  return (
    <div>
      <FormGroup>
        <Form.Check type="checkbox" label="Unresponsive"></Form.Check>
        <Form.Check type="checkbox" label="Unresponsive"></Form.Check>
        <Form.Check type="checkbox" label="Unresponsive"></Form.Check>
        <Form.Check type="checkbox" label="Unresponsive"></Form.Check>
        <br></br>
        <Form.Label>Extra Notes:</Form.Label>
        <Form.Control as="textarea" rows={3}></Form.Control>
        <br />
        <Button>Submit</Button>
        <Button variant="danger">Cancel</Button>
      </FormGroup>
    </div>
  );
}

export default IssueSubmission;
