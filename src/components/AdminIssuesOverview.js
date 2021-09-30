import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import AdminUnitModal from "./AdminUnitModal";

function AdminIssuesOverview() {
  return (
    <div>
      Outstanding issues:
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>View</th>
            <th>Type</th>
            <th>Unit</th>
            <th>Issue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <AdminUnitModal />
            </td>
            <td>MC3031</td>
            <td>57hh</td>
            <td>
              <ListGroup horizontal>
                <ListGroup.Item>Unresponsive</ListGroup.Item>
                <ListGroup.Item>Screen Broken</ListGroup.Item>
                <ListGroup.Item>Buttons Broken</ListGroup.Item>
              </ListGroup>
            </td>
          </tr>
          <tr>
            <td>
              <AdminUnitModal />
            </td>
            <td>9091</td>
            <td>57hh</td>
            <td>
              <ListGroup horizontal>
                <ListGroup.Item>Unresponsive</ListGroup.Item>
                <ListGroup.Item>Screen Broken</ListGroup.Item>
              </ListGroup>
            </td>
          </tr>
          <tr>
            <td>
              <AdminUnitModal />
            </td>
            <td>WC3300</td>
            <td>57hh</td>
            <td>
              <ListGroup horizontal>
                <ListGroup.Item>Unresponsive</ListGroup.Item>
                <ListGroup.Item>Buttons Broken</ListGroup.Item>
              </ListGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminIssuesOverview;
