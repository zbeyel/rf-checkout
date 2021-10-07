import React from "react";
import { Accordion } from "react-bootstrap";
import AdminIssuesOverview from "./AdminIssuesOverview";
import AdminEquipmentManagement from "./AdminEquipmentManagement";
function AdminEquipHome() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Outstanding Issues</Accordion.Header>
          <Accordion.Body>
            <AdminIssuesOverview></AdminIssuesOverview>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>General Equipment Management</Accordion.Header>
          <Accordion.Body>
            <AdminEquipmentManagement></AdminEquipmentManagement>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey=" 2">
          <Accordion.Header>
            Equipment checked out more than 12hrs
          </Accordion.Header>
          <Accordion.Body>
            table with: <br />
            - equipment checkout out for over 12 hrs <br />
            - who checked out
            <br />- timestamp from checkout
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Users checking unassigned equipment
          </Accordion.Header>
          <Accordion.Body>
            table with: <br />- user, equipment, timestamp,
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default AdminEquipHome;
