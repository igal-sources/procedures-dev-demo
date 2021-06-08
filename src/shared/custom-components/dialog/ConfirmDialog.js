import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import * as types from "../../types";
import "./confirm-dialog.scss";

const ConfirmDialog = ({ headerText, messageText, showConfirm, onConfirm = types.EmptyFn }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(showConfirm);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showConfirm]);

  return (
    <>
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{messageText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmDialog;
