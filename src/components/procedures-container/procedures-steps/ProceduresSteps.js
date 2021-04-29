import React, { useEffect } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure, isReadOnly, actionType }) => {
  const { ProcedureSteps = [] } = procedure;

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
        <Column dataField="Title"></Column>
        <Column dataField="Instruction"></Column>
      </DataGrid>
    </div>
  );
};

export default ProceduresSteps;
