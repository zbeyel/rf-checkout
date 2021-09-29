import React from "react";
import { Table } from "react-bootstrap";
import AdminUnitModal from "./AdminUnitModal";

function AdminPanel() {
  return (
    <div>
      Outstanding issues:
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>View</th>
            <th>Unit</th>
            <th>Type</th>
            <th>Issue</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <AdminUnitModal />
            </td>
            <td>1</td>
            <td>57hh</td>
            <td>Id anim esse elit ipsum deserunt Lorem consequat.</td>
            <td>
              Quis ex consequat consectetur tempor irure incididunt Lorem
              deserunt dolore anim laboris aliquip consequat. Eu irure id labore
              aliquip deserunt duis mollit laborum ea Lorem dolore duis ut.
              Minim anim exercitation non labore duis aute nisi consequat ut.
              Reprehenderit irure nostrud deserunt esse laborum eu exercitation
              aute eu incididunt mollit.
            </td>
          </tr>
          <tr>
            <td>
              <AdminUnitModal />
            </td>
            <td>2</td>
            <td>57hh</td>
            <td>Id anim esse elit ipsum deserunt Lorem consequat.</td>
            <td>
              Quis ex consequat consectetur tempor irure incididunt Lorem
              deserunt dolore anim laboris aliquip consequat. Eu irure id labore
              aliquip deserunt duis mollit laborum ea Lorem dolore duis ut.
              Minim anim exercitation non labore duis aute nisi consequat ut.
              Reprehenderit irure nostrud deserunt esse laborum eu exercitation
              aute eu incididunt mollit.
            </td>
          </tr>
          <tr>
            <td>
              <AdminUnitModal />
            </td>
            <td>3</td>
            <td>57hh</td>
            <td>Id anim esse elit ipsum deserunt Lorem consequat.</td>
            <td>
              Quis ex consequat consectetur tempor irure incididunt Lorem
              deserunt dolore anim laboris aliquip consequat. Eu irure id labore
              aliquip deserunt duis mollit laborum ea Lorem dolore duis ut.
              Minim anim exercitation non labore duis aute nisi consequat ut.
              Reprehenderit irure nostrud deserunt esse laborum eu exercitation
              aute eu incididunt mollit.
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminPanel;
