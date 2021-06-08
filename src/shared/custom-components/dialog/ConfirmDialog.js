import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Modal, Button } from "react-bootstrap";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import * as types from "../../types";
import "./confirm-dialog.scss";

const ConfirmDialog = ({headerText, messageText, showConfirm, onConfirm = types.EmptyFn}) => {
  console.log("showConfirm: ", showConfirm);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(showConfirm);
    // console.log("ProceduresMain-useEffect: ");
    //!isCancelled.current && fetchData();
    //fetchData();

    return () => {
      // isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal show={showConfirm} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmDialog;
