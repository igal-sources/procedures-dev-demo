import React, { useState } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Modal, Button } from "react-bootstrap";
import ProceduresEditor from "../../procedures-container/procedures-editor/ProceduresEditor";
import { deleteProcedure } from "../../../services/procedures-http.service";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import new_procedure from "../../../images/32_new_procedure.png";
import view_procedure from "../../../images/32_view_procedure.png";
import delete_procedure from "../../../images/32_delete_procedure.png";
import refresh_procedure from "../../../images/refresh_32x32.png";
import * as types from "../../../shared/types";
import ConfirmDialog from "../../../shared/custom-components/dialog/ConfirmDialog";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState();
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState({});
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const onClose = () => setIsOpen(false);
  const handleClose = () => setShowConfirmDelete(false);

  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(true);
    console.log("handleShowConfirmDelete: ", showConfirmDelete);
  };

  const openNew = () => {
    setAction(types.actions.ADD);
    setIsOpen(true);
    setIsReadOnly(false);
    setSelectedProcedure(types.initializeProcedure);
  };

  const openEdit = () => {
    setAction(types.actions.EDIT);
    setIsOpen(true);
    setIsReadOnly(false);
    setSelectedProcedure(JSON.parse(localStorage.getItem("selectedProcedure")));
  };

  const removeProc = () => {
    var procedureId = localStorage.getItem("selectedProcedureId");
    console.log("REMOVE - procedureId: ", procedureId);
    procedureId && deleteProcedure(procedureId);
    setShowConfirmDelete(false);
    refreshPage();
  };

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const onConfirm = () => {
    setIsOpen(false);
    refreshPage();
  };

  return (
    <div>
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showConfirmDelete}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>Delete Procedure</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you wish to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={removeProc}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <Menu className="Header-mainMenu">
        <ProceduresEditor
          show={isOpen}
          close={onClose}
          confirm={onConfirm}
          actionType={action}
          procedure={selectedProcedure}
          isReadOnly={isReadOnly}
        />
        <Menu.Item onClick={() => openNew()}>
          <div>
            <Image src={new_procedure} />
            <span className="Header-title">New</span>
          </div>
        </Menu.Item>
        <Menu.Item
          onClick={() => openEdit()}
          disabled={localStorage.getItem("selectedProcedureId") === null}
        >
          <div>
            <Image src={view_procedure} />
            <span className="Header-title">Edit</span>
          </div>
        </Menu.Item>
        <Menu.Item
          onClick={handleShowConfirmDelete}
          disabled={localStorage.getItem("selectedProcedureId") === null}
        >
          <div>
            <Image src={delete_procedure} />
            <span className="Header-title">Delete</span>
          </div>
        </Menu.Item>
        <Menu.Item onClick={refreshPage}>
          <div>
            <Image src={refresh_procedure} />
            <span className="Header-title">Refresh</span>
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
