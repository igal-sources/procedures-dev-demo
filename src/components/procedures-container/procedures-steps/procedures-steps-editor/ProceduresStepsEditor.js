import React, { useState, useEffect } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import { Modal, Button } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import Form, { GroupItem, SimpleItem } from "devextreme-react/form";
import * as types from "../../../../shared/types";
import ComponentTitle from "../../../../shared/custom-components/component-title/ComponentTitle";
import "./procedures-steps-editor.scss";

const ProceduresStepsEditor = ({
  selectedStep,
  isReadOnly,
  actionType,
  show = types.EmptyFn,
  close = types.EmptyFn,
  confirm = types.EmptyFn,
}) => {
  const [headerText, setHeaderText] = useState("");
  const [stepResults, setStepResults] = useState([]);

  const initData = (action) => {
    const { ProcedureStepResults = [] } = selectedStep;

    setStepResults(ProcedureStepResults);
    console.log("ProcedureStepResults1: ", ProcedureStepResults);

    switch (action) {
      case types.actions.ADD:
        setHeaderText("Add New Step");
        break;
      case types.actions.EDIT:
        setHeaderText("Edit Selected Step");
        break;
      default:
        break;
    }
  };

  const onConfirm = (action) => {
    switch (action) {
      case types.actions.ADD:
        
        break;
      case types.actions.EDIT:
        break;
      default:
        break;
    }

    confirm();
  };

  useEffect(() => {
    initData(actionType);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStep]);

  return (
    <>
      <Modal
        size="lg"
        show={show}
        backdrop="static"
        keyboard={false}
        className="ProceduresStepsEditor-Modal"
      >
        <Modal.Header closeButton={false}>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ProceduresStepsEditor-container">
          <Grid divided="vertically">
            <Grid.Row columns={1}>
              <Grid.Column>
                <div className="ProceduresStepsEditor-StepForm">
                  <Form
                    id="form"
                    formData={selectedStep}
                    readOnly={false}
                    showColonAfterLabel={true}
                    labelLocation={"left"}
                    minColWidth={550}
                    colCount={2}
                    width={650}
                  >
                    <GroupItem>
                      <SimpleItem dataField="Title" />
                      <SimpleItem dataField="Instruction" />
                    </GroupItem>
                  </Form>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <div className="ProceduresSteps-results">
                  <ComponentTitle title="Results" />
                  <DataGrid
                    allowColumnReordering={true}
                    selection={{ mode: "single" }}
                    columnAutoWidth={true}
                    hoverStateEnabled={true}
                    dataSource={stepResults}
                    keyExpr="SequenceNumber"
                  >
                    <Editing
                      mode="cell"
                      allowAdding={!isReadOnly}
                      allowDeleting={!isReadOnly}
                      allowUpdating={!isReadOnly}
                      confirmDelete={true}
                    />
                    <Column dataField="SequenceNumber" caption="#" width={30}></Column>
                    <Column dataField="Name"></Column>
                  </DataGrid>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => onConfirm(actionType)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProceduresStepsEditor;
