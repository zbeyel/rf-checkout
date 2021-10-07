import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import AdminEquipHome from "./equipment/AdminEquipHome";
import AdminUserManagement from "./users/AdminUserManagement";
function AdminPanel() {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Equipment</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Users</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AdminEquipHome />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AdminUserManagement />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default AdminPanel;
