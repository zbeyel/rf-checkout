import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import AdminEquipManagementType from "./AdminEquipManagementType";

function AdminEquipmentManagement() {
  return (
    <Tabs defaultActiveKey="mc3031">
      <Tab eventKey="mc3031" title="MC3031">
        <AdminEquipManagementType unitType="mc3031"></AdminEquipManagementType>
      </Tab>
      <Tab eventKey="9091" title="9091">
        <AdminEquipManagementType unitType="9091"></AdminEquipManagementType>
      </Tab>
      <Tab eventKey="wc3300" title="WC3300">
        <AdminEquipManagementType unitType="wc3300"></AdminEquipManagementType>
      </Tab>
    </Tabs>
  );
}

export default AdminEquipmentManagement;
