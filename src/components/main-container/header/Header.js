import React, { useState } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProceduresEditor from "../../procedures-container/procedures-editor/ProceduresEditor";
import { removeProcedure } from "../../../services/procedures-http.service";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import new_procedure from "../../../images/32_new_procedure.png";
import view_procedure from "../../../images/32_view_procedure.png";
import delete_procedure from "../../../images/32_delete_procedure.png";
import refresh_procedure from "../../../images/refresh_32x32.png";
import * as types from "../../../shared/types";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState();
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState({});

  const onClose = () => setIsOpen(false);

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

  const confirmRemove = () => {
    confirmAlert({
      title: "Remove Procedure",
      message: "Are you sure you wish to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => removeProc(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const removeProc = () => {
    var procedureId = localStorage.getItem("procedureId");
    console.log("REMOVE - procedureId: ", procedureId);
    procedureId && removeProcedure(procedureId);
  };

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const onConfirm = () => {
    setIsOpen(false);
    //setConfirm(true);
  };

  return (
    <>
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
        <Menu.Item onClick={() => openEdit()}>
          <div>
            <Image src={view_procedure} />
            <span className="Header-title">Edit</span>
          </div>
        </Menu.Item>
        <Menu.Item onClick={() => confirmRemove()}>
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
    </>
  );
};

export default Header;
