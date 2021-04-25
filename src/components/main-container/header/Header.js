import React, { useState } from "react";
import { Menu, Image } from "semantic-ui-react";
import { createProcedure } from "../../../services/procedures-http.service";
import ProceduresEditor from "../../procedures-container/procedures-editor/ProceduresEditor";
import new_procedure from "../../../images/32_new_procedure.png";
import view_procedure from "../../../images/32_view_procedure.png";
import delete_procedure from "../../../images/32_delete_procedure.png";
import refresh_procedure from "../../../images/refresh_32x32.png";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState({});

  const onClose = () => setIsOpen(false);

  const openNew = () => {
    setIsOpen(true);
    setIsReadOnly(false);
    setSelectedProcedure({});
  }

  const openEdit = () => {
    setIsOpen(true);
    setIsReadOnly(false);
    setSelectedProcedure(JSON.parse(localStorage.getItem("selectedProcedure")));
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
        <Menu.Item as="a">
          <div>
            <Image src={delete_procedure} />
            <span className="Header-title">Delete</span>
          </div>
        </Menu.Item>
        <Menu.Item as="a">
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
