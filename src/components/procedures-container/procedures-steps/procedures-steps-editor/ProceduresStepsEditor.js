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

  const textBoxOptions = { width: "500px" };

  const initData = (action) => {
    if (selectedStep) {
      const { possibleresultsList = [] } = selectedStep;
      setStepResults(possibleresultsList);
      //console.log("possibleresultsList: ", possibleresultsList);
    }

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

  const onConfirm = (action) => confirm();

  const customizeItem = (item) => {
    if (item.dataField === "title" || item.dataField === "instruction") {
      item.validationRules = [
        {
          type: "required",
          message: "The value is required",
        },
      ];
    }
  };

  useEffect(() => {
    initData(actionType);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStep, actionType]);

  return (
    <div className="ProceduresStepsEditor-container">
      <Modal
        size="lg"
        show={show}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="ProceduresStepsEditor-Modal"
      >
        <Modal.Header closeButton={false}>
          <Modal.Title id="contained-modal-title-vcenter">{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ProceduresStepsEditor-editor-container">
          <Grid divided="vertically">
            <Grid.Row columns={1}>
              <Grid.Column>
                <div className="ProceduresStepsEditor-StepForm">
                  <Form
                    id="form"
                    formData={selectedStep}
                    readOnly={false}
                    showColonAfterLabel={true}
                    customizeItem={customizeItem}
                    showValidationSummary={true}
                    labelLocation={"left"}
                    minColWidth={650}
                    colCount={2}
                    width={650}
                  >
                    <GroupItem>
                      <SimpleItem dataField="title" editorOptions={textBoxOptions} />
                      <SimpleItem dataField="instruction" editorOptions={textBoxOptions} />
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
                    keyExpr="sequencenumber"
                  >
                    <Editing
                      mode="cell"
                      allowAdding={!isReadOnly}
                      allowDeleting={!isReadOnly}
                      allowUpdating={!isReadOnly}
                      confirmDelete={true}
                    />
                    <Column dataField="sequencenumber" caption="#" width={30}></Column>
                    <Column dataField="name"></Column>
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
    </div>
  );
};

export default ProceduresStepsEditor;
