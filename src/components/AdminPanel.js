import React from "react";
import { Accordion } from "react-bootstrap";
import AdminEquipmentManagement from "./AdminEquipmentManagement";
import AdminIssuesOverview from "./AdminIssuesOverview";

function AdminPanel() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>General Equipment Management</Accordion.Header>
        <Accordion.Body>
          <AdminEquipmentManagement></AdminEquipmentManagement>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Outstanding Issues</Accordion.Header>
        <Accordion.Body>
          <AdminIssuesOverview></AdminIssuesOverview>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AdminPanel;
