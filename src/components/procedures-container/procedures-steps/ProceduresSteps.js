import React, { useState } from "react";
import { DataGrid, Column, Lookup } from "devextreme-react/data-grid";
import classNames from "classnames";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure = {} }) => {
  const [activeRowId, setActiveRowId] = useState(undefined);
  const [steps, setSteps] = useState([]);
  const { ProcedureSteps = [] } = procedure;

  const selectedClassName = (selectedId) =>
    classNames("ProceduresSteps-row-item", { selected: activeRowId === selectedId });

  return (
    <div className="ProceduresSteps-container">
      <ComponentTitle title="Steps" />
      <DataGrid
        allowColumnReordering={true}
        selection={{ mode: "single" }}
        columnAutoWidth={true}
        hoverStateEnabled={true}
        dataSource={ProcedureSteps}
        keyExpr="ProcedureStepID">
          <Column dataField="SequenceNumber" caption="#" width={50}></Column>
          <Column dataField="Title" caption="Title" width={320}></Column>
          <Column dataField="Instruction" caption="Instruction" width={320}></Column>
      </DataGrid>
    </div>
  );
};

export default ProceduresSteps;
