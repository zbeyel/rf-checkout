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
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Dolore non minim ut voluptate cillum et est id dolor commodo. Irure
          duis excepteur quis irure dolore. Cillum adipisicing exercitation
          nostrud adipisicing esse dolor amet proident nisi sint. Enim ullamco
          ea voluptate aliquip ullamco dolore mollit deserunt ad voluptate.
          Minim ipsum nostrud Lorem exercitation.
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
