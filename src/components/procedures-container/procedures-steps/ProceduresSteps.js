import React, { useEffect } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure, isReadOnly, actionType }) => {
  const { ProcedureSteps = [] } = procedure;
  console.log("ProcedureSteps: ", ProcedureSteps);

  const cellRender = (data) => {
    const res = data.value.map((v) => Object.values(v.Name).join("")).join(", ");
    return res;
  };

  useEffect(() => {
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure]);

  return (
    <div className="ProceduresSteps-container">
      <ComponentTitle title="Steps" />
      <DataGrid
        allowColumnReordering={true}
        selection={{ mode: "single" }}
        columnAutoWidth={true}
        hoverStateEnabled={true}
        dataSource={ProcedureSteps}
        keyExpr=""
      >
        <Editing
          mode="row"
          allowAdding={!isReadOnly}
          allowDeleting={!isReadOnly}
          allowUpdating={!isReadOnly}
          confirmDelete={true}
        />
        <Column dataField="SequenceNumber" caption="#" width={30}></Column>
        <Column dataField="Title" width={320}></Column>
        <Column dataField="Instruction" width={320}></Column>
        <Column dataField="ProcedureStepResults" caption="Results" cellRender={cellRender}></Column>
      </DataGrid>
    </div>
  );
};

export default ProceduresSteps;
