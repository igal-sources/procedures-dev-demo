import React from "react";
import { Modal, Button } from "react-bootstrap";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import * as types from "../../types";
import "./confirm-dialog.scss";

const ConfirmDialog = ({ headerText, messageText, close, show, onConfirm = types.EmptyFn }) => {
  return (
    <>
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={close}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{messageText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
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
