import React, { useState, useEffect } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import ProceduresStepsEditor from "../procedures-steps/procedures-steps-editor/ProceduresStepsEditor";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import * as types from "../../../shared/types";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure, isReadOnly, actionType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState();
  const [selectedSteps, setSelectedSteps] = useState([]);

  const { ProcedureSteps = [] } = procedure;

  console.log("ProcedureSteps: ", ProcedureSteps);

  const cellRender = (data) => {
    const res = data.value.map((v) => Object.values(v.Name).join("")).join(", ");
    return res;
  };

  const onClose = () => setIsOpen(false);

  const onConfirm = () => {
    setIsOpen(false);
    console.log("onConfirm-Procedure: ", procedure);
    console.log("onConfirm-ProcedureSteps: ", selectedSteps);
    //setConfirm(true);
  };

  const handleSelected = ({ selectedRowsData }) => {
    setSelectedSteps(selectedRowsData[0]);
  };

  const onToolbarPreparing = (e) => {
    !isReadOnly &&
      e.toolbarOptions.items.unshift(
        {
          location: "after",
          widget: "dxButton",
          options: {
            icon: "add",
            onClick: () => handleToolbarActionsClick(types.actions.ADD),
          },
        },
        {
          location: "after",
          widget: "dxButton",
          options: {
            icon: "edit",
            onClick: () => handleToolbarActionsClick(types.actions.EDIT),
          },
        },
        {
          location: "after",
          widget: "dxButton",
          options: {
            icon: "remove",
            onClick: () => handleToolbarActionsClick(types.actions.REMOVE),
          },
        }
      );
  };

  const handleToolbarActionsClick = (action) => {
    switch (action) {
      case types.actions.ADD:
        setAction(types.actions.ADD);
        setIsOpen(true);
        setSelectedSteps(types.initializeProcedureStep);
        break;
      case types.actions.EDIT:
        setAction(types.actions.EDIT);
        setIsOpen(true);
        setSelectedSteps(selectedSteps);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure]);

  return (
    <div className="ProceduresSteps-container">
      <ProceduresStepsEditor
        show={isOpen}
        close={onClose}
        confirm={onConfirm}
        actionType={action}
        procedure={procedure}
        isReadOnly={isReadOnly}
      />
      <ComponentTitle title="Steps" />
      <DataGrid
        allowColumnReordering={true}
        selection={{ mode: "single" }}
        columnAutoWidth={true}
        hoverStateEnabled={true}
        dataSource={ProcedureSteps}
        onSelectionChanged={handleSelected}
        keyExpr=""
        onToolbarPreparing={onToolbarPreparing}
      >
        {/* <Editing
          mode="row"
          allowAdding={!isReadOnly}
          allowDeleting={!isReadOnly}
          allowUpdating={!isReadOnly}
          confirmDelete={true}
        /> */}
        <Column dataField="SequenceNumber" caption="#" width={30}></Column>
        <Column dataField="Title" width={320}></Column>
        <Column dataField="Instruction" width={320}></Column>
        <Column dataField="ProcedureStepResults" caption="Results" cellRender={cellRender}></Column>
      </DataGrid>
    </div>
  );
};

export default ProceduresSteps;
