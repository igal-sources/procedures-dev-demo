import React from "react";
import { DataGrid, Column } from "devextreme-react/data-grid";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure, isReadOnly }) => {
  console.log('ProceduresSteps - procedure: ', procedure);
  const { ProcedureSteps = [] } = procedure;

  const handleToolbarClicks = () => {};

  const onToolbarPreparing = (e) => {
    if (isReadOnly) return;

     e.toolbarOptions.items.unshift(
      {
        location: "after",
        widget: "dxButton",
        options: {
          icon: "arrowdown",
          onClick: handleToolbarClicks(),
        },
      },
      {
        location: "after",
        widget: "dxButton",
        options: {
          icon: "arrowup",
          onClick: handleToolbarClicks(),
        },
      },
      {
        location: "after",
        widget: "dxButton",
        options: {
          icon: "add",
          onClick: handleToolbarClicks(),
        },
      },
      {
        location: "after",
        widget: "dxButton",
        options: {
          icon: "edit",
          onClick: handleToolbarClicks(),
        },
      },
      {
        location: "after",
        widget: "dxButton",
        options: {
          icon: "remove",
          onClick: handleToolbarClicks(),
        },
      }
    );
  };

  return (
    <div className="ProceduresSteps-container">
      <ComponentTitle title="Steps" />
      <DataGrid
        allowColumnReordering={true}
        selection={{ mode: "single" }}
        columnAutoWidth={true}
        hoverStateEnabled={true}
        dataSource={ProcedureSteps}
        onToolbarPreparing={onToolbarPreparing}
        keyExpr="ProcedureStepID"
      >
        <Column dataField="SequenceNumber" caption="#" width={50}></Column>
        <Column dataField="Title" caption="Title" width={300}></Column>
        <Column dataField="Instruction" caption="Instruction" width={343}></Column>
      </DataGrid>
    </div>
  );
};

export default ProceduresSteps;
