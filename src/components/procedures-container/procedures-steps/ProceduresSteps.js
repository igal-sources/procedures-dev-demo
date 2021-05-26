import React, { useState, useEffect } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import ProceduresStepsEditor from "../procedures-steps/procedures-steps-editor/ProceduresStepsEditor";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import * as types from "../../../shared/types";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure, isReadOnly, actionType, heightValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState();
  const [selectedStep, setSelectedStep] = useState({});
  const [procedureSteps, setProcedureSteps] = useState({});

  const initData = () => {
    const { ProcedureSteps = [] } = procedure;
    setProcedureSteps(ProcedureSteps);
  };

  const initNewProcedureStep = () => {
    const newStep = types.initializeProcedureStep;

    if (procedureSteps.length === 0) {
      newStep.SequenceNumber = 1;
    } else {
      newStep.SequenceNumber = procedureSteps[procedureSteps.length - 1].SequenceNumber + 1;
    }

    setSelectedStep(newStep);
  };

  const removeStep = () => {
    const newSteps = procedureSteps.filter(
      (item) => item.SequenceNumber !== selectedStep.SequenceNumber
    );

    procedure.ProcedureSteps = newSteps;
    setProcedureSteps(procedure.ProcedureSteps);
  };

  const cellRenderResults = (data) => {
    const res = data && data.value.map((v) => Object.values(v.Name).join("")).join(", ");
    return res;
  };

  const onClose = () => setIsOpen(false);

  const onConfirm = () => {
    setIsOpen(false);

    switch (action) {
      case types.actions.ADD:
        procedure.ProcedureSteps = [...procedure.ProcedureSteps, selectedStep];
        break;
      case types.actions.EDIT:
        break;

      default:
        break;
    }

    //setConfirm(true);
  };

  const handleSelected = ({ selectedRowsData }) => {
    setSelectedStep(selectedRowsData[0]);
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
            // disabled: selectedStep === null,
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
    setAction(action);
    console.log("handleToolbarActionsClick-action: ", action);

    switch (action) {
      case types.actions.ADD:
        setIsOpen(true);
        initNewProcedureStep();
        break;
      case types.actions.EDIT:
        setSelectedStep(selectedStep);
        if (selectedStep !== null) {
          setIsOpen(true);
        }
        break;
      case types.actions.REMOVE:
        removeStep();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    initData();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure.ProcedureSteps]);

  return (
    <div className="ProceduresSteps-container">
      <ProceduresStepsEditor
        show={isOpen}
        close={onClose}
        confirm={onConfirm}
        actionType={action}
        selectedStep={selectedStep}
        isReadOnly={isReadOnly}
      />
      <ComponentTitle title="Steps" />
      <DataGrid
        className="ProceduresSteps-grid"
        style={{ height: heightValue }}
        allowColumnReordering={true}
        selection={{ mode: "single" }}
        columnAutoWidth={true}
        hoverStateEnabled={true}
        dataSource={procedureSteps}
        onSelectionChanged={handleSelected}
        keyExpr=""
        onToolbarPreparing={onToolbarPreparing}
      >
        <Editing mode="row" confirmDelete={true} />
        <Column dataField="SequenceNumber" caption="#" width={30}></Column>
        <Column dataField="Title" width={320}></Column>
        <Column dataField="Instruction" width={320}></Column>
        <Column
          dataField="ProcedureStepResults"
          caption="Results"
          cellRender={cellRenderResults}
        ></Column>
      </DataGrid>
    </div>
  );
};

export default ProceduresSteps;
