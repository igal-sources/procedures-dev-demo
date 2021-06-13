import React, { useState, useEffect } from "react";
import { DataGrid, Column, Editing, Paging } from "devextreme-react/data-grid";
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
  const [isValid, setIsValid] = useState(false);

  const textBoxOptions = { width: "500px" };

  const initData = (action) => {
    const { possibleresultsList = [] } = selectedStep;
    setStepResults(possibleresultsList);

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

  const onConfirm = () => {
    confirm();
  };

  const validationRules = {
    title: [{ type: "required", message: "Title cannot be empty." }],
    instruction: [{ type: "required", message: "Instruction cannot be empty." }],
  };

  const validateForm = (e) => {
    const validate = e.component.validate();
    setIsValid(validate.isValid);
    //console.log("valid: ", validate.isValid);
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
                    onContentReady={validateForm}
                    // showValidationSummary={true}
                    labelLocation={"left"}
                    minColWidth={650}
                    colCount={2}
                    width={650}
                  >
                    <GroupItem>
                      <SimpleItem
                        dataField="title"
                        editorOptions={textBoxOptions}
                        validationRules={validationRules.title}
                      />
                      <SimpleItem
                        dataField="instruction"
                        editorOptions={textBoxOptions}
                        validationRules={validationRules.instruction}
                      />
                    </GroupItem>
                  </Form>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <div>
                  <ComponentTitle title="Results" />
                  <DataGrid
                    className="ProceduresSteps-results-grid"
                    allowColumnReordering={true}
                    selection={{ mode: "single" }}
                    columnAutoWidth={true}
                    hoverStateEnabled={true}
                    dataSource={stepResults}
                    keyExpr="sequencenumber"
                  >
                    <Paging enabled={false} />
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
          <Button
            variant="primary"
            /*disabled={!isValid}*/ type="submit"
            onClick={() => onConfirm()}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProceduresStepsEditor;
