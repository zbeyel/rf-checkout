import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AdminEquipManagementSingle() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Unit Management</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Unit #: <br />
          Unit Type: <br />
          Reported Issue: <br />
          Notes: <br />
          Status: <br></br>History: Accordion here
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminEquipManagementSingle;
