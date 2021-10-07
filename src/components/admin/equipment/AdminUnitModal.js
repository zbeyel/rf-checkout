import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AdminUnitModal() {
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        View more
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
          Status:
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

export default AdminUnitModal;
