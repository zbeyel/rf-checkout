import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import AdminEquipManagementType from "./AdminEquipManagementType";

function AdminEquipmentManagement() {
  return (
    <Tabs defaultActiveKey="mc3031">
      <Tab eventKey="mc3031" title="MC3031">
        <AdminEquipManagementType></AdminEquipManagementType>
      </Tab>
      <Tab eventKey="9091" title="9091">
        <AdminEquipManagementType></AdminEquipManagementType>
      </Tab>
      <Tab eventKey="wc" title="WC">
        <AdminEquipManagementType></AdminEquipManagementType>
      </Tab>
    </Tabs>
  );
}

export default AdminEquipmentManagement;
