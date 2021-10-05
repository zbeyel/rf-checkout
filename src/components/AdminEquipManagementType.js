import React from "react";
import { Table } from "react-bootstrap";
import AdminEquipManagementSingle from "./AdminEquipManagementSingle";

function AdminEquipManagementType() {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Details</th>
          <th>Unit Number</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <AdminEquipManagementSingle></AdminEquipManagementSingle>
          </td>
          <td>57HH</td>
          <td>Out for repair</td>
        </tr>
        <tr>
          <td>
            <AdminEquipManagementSingle></AdminEquipManagementSingle>
          </td>
          <td>57HH</td>
          <td>Okay</td>
        </tr>
        <tr>
          <td>
            <AdminEquipManagementSingle></AdminEquipManagementSingle>
          </td>
          <td>57HH</td>
          <td>Okay</td>
        </tr>
        <tr>
          <td>
            <AdminEquipManagementSingle></AdminEquipManagementSingle>
          </td>
          <td>57HH</td>
          <td>Out for repair</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AdminEquipManagementType;
