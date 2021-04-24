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
  await sendBatchRequest(changes, procedure);
  await component.refresh(true);
  component.cancelEditData();
}

const ProceduresSteps = ({ procedure, isReadOnly }) => {
  const isCancelled = useRef(false);
  const [procedureSteps, setProcedureSteps] = useState([]);
  console.log("procedureSteps: ", procedureSteps);

  const { ProcedureSteps = [] } = procedure;
  const stepsDataSource = new DataSource(ProcedureSteps);

  useEffect(() => {
    !isCancelled.current && setProcedureSteps(ProcedureSteps);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSaving = useCallback((e) => {
    e.cancel = true;

    if (e.changes.length) {
      switch (change.type) {
        case "insert":

        case "update":

        case "remove":

        default:
          break;
      }

      const [{ data }] = e.changes;

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

      e.promise = processBatchRequest(e.changes, e.component, procedure);
      stepsDataSource.refresh;
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
        repaintChangesOnly
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
