import React, { useCallback, useState, useEffect, useRef } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import DataSource from "devextreme/data/data_source";
import { updateProcedure } from "../../../services/procedures-http.service";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
//import { actions } from "../../../shared/types";

import "./procedures-steps.scss";

async function sendBatchRequest(changes, procedure) {
  console.log("updateProcedure: procedure.id, procedure: ", procedure.id, procedure);
  updateProcedure(procedure.id, procedure);
}

async function processBatchRequest(changes, component, procedure) {
  console.log("processBatchRequest- procedure: ", procedure);
  await sendBatchRequest(changes, procedure);
  //await component.refresh(true);
  //component.cancelEditData();
}

const ProceduresSteps = ({ procedure, isReadOnly }) => {
  const isCancelled = useRef(false);
  const [procedureSteps, setProcedureSteps] = useState([]);
  //console.log("procedureSteps: ", procedureSteps);

  const { ProcedureSteps = [] } = procedure;
  const stepsDataSource = new DataSource(ProcedureSteps);

  useEffect(() => {
    !isCancelled.current && setProcedureSteps(ProcedureSteps);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure.ProcedureSteps]);

  const onRowInserted = (e) => {
    //console.log("onRowInserted: ", e);

    const { data } = e;
    //console.log('onRowInserted-data: ', data);
    
    //console.log("onRowInserted-procedure: ", procedure);
  }

  const onRowUpdated = (e) => {
    //console.log("onRowUpdated: ", e);
  }

  const onRowRemoved = (e) => {
    //console.log("onRowRemoved: ", e);
  }

  const onSaving = useCallback((e) => {
    e.cancel = true;
    //console.log("onSaving: ", e);

    if (e.changes.length) {

      const [{ data, type }] = e.changes;
     // console.log("data, type: ", data, type);

      switch (type) {
        case "insert":

        case "update":

        case "remove":

        default:
          break;
      }

      const newStep = [
        {
          ProcedureStepID: 1,
          ProcedureID: procedure.id,
          SequenceNumber: data.SequenceNumber,
          Title: data.Title,
          Instruction: data.Instruction,
        },
      ];

      procedure.ProcedureSteps = [
        ...ProcedureSteps,
        {
          ProcedureStepID: 1,
          ProcedureID: procedure.id,
          SequenceNumber: data.SequenceNumber,
          Title: data.Title,
          Instruction: data.Instruction,
        },
      ];

      //e.promise = processBatchRequest(e.changes, e.component, procedure);
    }
  }, []);

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
        onRowInserted={onRowInserted}
        onRowUpdated={onRowUpdated}
        onRowRemoved={onRowRemoved}
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
