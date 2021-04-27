import React, { useEffect, useRef } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
//import DataSource from "devextreme/data/data_source";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure, isReadOnly }) => {
  const isCancelled = useRef(false);
  //const [procedureSteps, setProcedureSteps] = useState([]);
  //console.log("procedureSteps: ", procedureSteps);

  const { ProcedureSteps = [] } = procedure;
  //const stepsDataSource = new DataSource(ProcedureSteps);

  useEffect(() => {
    //!isCancelled.current && setProcedureSteps(ProcedureSteps);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure.ProcedureSteps]);  

  return (
    <div className="ProceduresSteps-container">
      <ComponentTitle title="Steps" />
      <DataGrid
        allowColumnReordering={true}
        selection={{ mode: "single" }}
        columnAutoWidth={true}
        hoverStateEnabled={true}
        dataSource={ProcedureSteps}
        keyExpr="ProcedureStepID"
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
