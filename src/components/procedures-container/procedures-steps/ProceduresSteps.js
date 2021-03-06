import React, { useState, useEffect } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import ConfirmDialog from "../../../shared/custom-components/dialog/ConfirmDialog";
import ProceduresStepsEditor from "../procedures-steps/procedures-steps-editor/ProceduresStepsEditor";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import * as types from "../../../shared/types";
import { isEmpty } from "../../../utils/types";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure, isReadOnly, actionType, heightValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState();
  const [selectedStep, setSelectedStep] = useState({});
  const [procedureSteps, setProcedureSteps] = useState({});
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleClose = () => setShowConfirmDelete(false);

  const initData = () => {
    const { stepsList = [] } = procedure;
    setProcedureSteps(stepsList);
  };

  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(true);
  };

  const initNewProcedureStep = () => {
    const newStep = types.initializeProcedureStep;

    if (procedureSteps.length === 0) {
      newStep.sequencenumber = 1;
    } else {
      newStep.sequencenumber = procedureSteps[procedureSteps.length - 1].sequencenumber + 1;
    }

    setSelectedStep(newStep);
  };

  const removeStep = () => {
    const newSteps = procedureSteps.filter(
      (item) => item.sequencenumber !== selectedStep.sequencenumber
    );

    procedure.stepsList = newSteps;
    setProcedureSteps(newSteps);
    setShowConfirmDelete(false);
  };

  const cellRenderResults = (data) => {
    const res = data.value && data.value.map((v) => Object.values(v.name).join("")).join(", ");
    return res;
  };

  const onClose = () => setIsOpen(false);

  const onConfirm = () => {
    setIsOpen(false);

    switch (action) {
      case types.actions.ADD:
        procedure.stepsList = [...procedure.stepsList, selectedStep];
        break;
      case types.actions.EDIT:
        break;

      default:
        break;
    }
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
            disabled: isEmpty(selectedStep),
            onClick: () => handleToolbarActionsClick(types.actions.EDIT),
          },
        },
        {
          location: "after",
          widget: "dxButton",
          options: {
            icon: "remove",
            disabled: isEmpty(selectedStep),
            onClick: () => handleToolbarActionsClick(types.actions.REMOVE),
          },
        }
      );
  };

  const handleToolbarActionsClick = (action) => {
    setAction(action);

    switch (action) {
      case types.actions.ADD:
        setIsOpen(true);
        initNewProcedureStep();
        break;
      case types.actions.EDIT:
        !isEmpty(selectedStep) && setIsOpen(true);
        break;
      case types.actions.REMOVE:
        !isEmpty(selectedStep) && handleShowConfirmDelete();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    initData();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure.stepsList, showConfirmDelete]);

  return (
    <div className="ProceduresSteps-container">
      <ConfirmDialog
        onConfirm={removeStep}
        headerText={"Delete Step"}
        messageText={"Are you sure you wish to delete?"}
        close={handleClose}
        show={showConfirmDelete}
      />
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
        hoverStateEnabled={true}
        dataSource={procedureSteps}
        onSelectionChanged={handleSelected}
        keyExpr=""
        onToolbarPreparing={onToolbarPreparing}
      >
        <Editing mode="row" confirmDelete={true} />
        <Column dataField="sequencenumber" caption="#" width={30}></Column>
        <Column dataField="title" width={320}></Column>
        <Column dataField="instruction" width={320}></Column>
        <Column
          dataField="possibleresultsList"
          width={150}
          caption="Results"
          cellRender={cellRenderResults}
        ></Column>
      </DataGrid>
    </div>
  );
};

export default ProceduresSteps;
