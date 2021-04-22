import React, { useCallback } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import DataSource from "devextreme/data/data_source";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import { actions } from "../../../shared/types";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure, isReadOnly }) => {
  const { ProcedureSteps = [] } = procedure;
  const stepsDataSource = new DataSource(ProcedureSteps);
  console.log("ProceduresSteps - ProcedureSteps: ", ProcedureSteps);

  const onSaving = useCallback((e) => {
    e.cancel = true;

    if (e.changes.length) {
      //e.promise = processBatchRequest(`${URL}/Batch`, e.changes, e.component);
      console.log("e.changes: ", e.changes);
    }
  }, []);

  const handleToolbarClicks = (action) => {
    switch (action) {
      case action.ADD:
        break;
      case action.EDIT:
        break;
      case action.REMOVE:
        break;
      case action.ARROW_UP:
        break;
      case action.ARROW_DOWN:
        break;
      default:
        break;
    }
  };

  const onToolbarPreparing = (e) => {
    if (isReadOnly) return;

    // e.toolbarOptions.items.unshift(
    //   {
    //     location: "after",
    //     widget: "dxButton",
    //     options: {
    //       icon: "arrowdown",
    //       onClick: handleToolbarClicks(actions.ARROW_DOWN),
    //     },
    //   },
    //   {
    //     location: "after",
    //     widget: "dxButton",
    //     options: {
    //       icon: "arrowup",
    //       onClick: handleToolbarClicks(actions.ARROW_UP),
    //     },
    //   },
    //   {
    //     location: "after",
    //     widget: "dxButton",
    //     options: {
    //       icon: "add",
    //       onClick: handleToolbarClicks(actions.ADD),
    //     },
    //   },
    //   {
    //     location: "after",
    //     widget: "dxButton",
    //     options: {
    //       icon: "edit",
    //       onClick: handleToolbarClicks(actions.EDIT),
    //     },
    //   },
    //   {
    //     location: "after",
    //     widget: "dxButton",
    //     options: {
    //       icon: "remove",
    //       onClick: handleToolbarClicks(actions.REMOVE),
    //     },
    //   }
    // );
  };

  return (
    <div className="ProceduresSteps-container">
      <ComponentTitle title="Steps" />
      <DataGrid
        allowColumnReordering={true}
        selection={{ mode: "single" }}
        columnAutoWidth={true}
        hoverStateEnabled={true}
        dataSource={stepsDataSource}
        onToolbarPreparing={onToolbarPreparing}
        keyExpr="ProcedureStepID"
        onSaving={onSaving}
      >
        <Editing
          mode="row"
          allowAdding={!isReadOnly}
          allowDeleting={!isReadOnly}
          allowUpdating={!isReadOnly}
          confirmDelete={true}
        />
        <Column dataField="SequenceNumber" caption="#" width={30}></Column>
        <Column dataField="Title"></Column>
        <Column dataField="Instruction"></Column>
      </DataGrid>
    </div>
  );
};

export default ProceduresSteps;
