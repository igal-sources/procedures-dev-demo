import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import Form, { GroupItem, SimpleItem } from "devextreme-react/form";
import TextArea from "devextreme-react/text-area";
import RadioGroup from "devextreme-react/radio-group";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import DaysPattern from "../../../shared/custom-components/days-pattern/DaysPattern";
import * as types from "../../../shared/types";
import "./procedures-recurring-editor.scss";

const ProceduresRecurringEditor = ({
  procedure,
  isReadOnly,
  actionType,
  show = types.EmptyFn,
  close = types.EmptyFn,
  confirm = types.EmptyFn,
}) => {
  const isCancelled = useRef(false);
  const [recurrence, setRecurrence] = useState({});
  const [selectedRecurrenceType, setSelectedRecurrenceType] = useState();
  //console.log("ProceduresRecurringEditor-procedure: ", procedure);
  //console.log("recurrence: ", recurrence);

  const initData = (action) => {
    const { ProcedureCondition = {} } = procedure;
    const { ProceduresSchedules = {} } = ProcedureCondition;
    console.log("initData-ProceduresSchedules: ", ProceduresSchedules);

    setSelectedRecurrenceType(types.recurrencePatterns[ProceduresSchedules.RecurrenceType - 1]);

    ProceduresSchedules.EndDate =
      ProceduresSchedules.EndDate === "" ? new Date() : ProceduresSchedules.EndDate;
    ProceduresSchedules.EndTime =
      ProceduresSchedules.EndTime === "" ? new Date() : ProceduresSchedules.EndTime;
    ProceduresSchedules.StartDate =
      ProceduresSchedules.StartDate === "" ? new Date() : ProceduresSchedules.StartDate;
    ProceduresSchedules.StartTime =
      ProceduresSchedules.StartTime === "" ? new Date() : ProceduresSchedules.StartTime;

    setRecurrence(ProceduresSchedules);
  };

  const handleUpdatedRecurrenceValues = (values) => {
    const updatedRecurrence = { ...recurrence, RecurrenceValues: values };
    setRecurrence(updatedRecurrence);

    procedure.ProcedureCondition.ProceduresSchedules.RecurrenceValues = values;
  };

  const onRecurrenceTypeChange = (e) => {
    const radioValue = e.value;

    setSelectedRecurrenceType(radioValue);
    const selectedValue = types.recurrencePatterns.findIndex((obj) => obj === radioValue);

    procedure.ProcedureCondition.ProceduresSchedules.RecurrenceType = selectedValue + 1;
    console.log("procedure: ", procedure);
  };

  const onConfirm = () => confirm();

  useEffect(() => {
    initData(actionType);

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure]);

  return (
    <div className="ProceduresRecurringEditor-container">
      <Modal
        size="lg"
        show={show}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="ProceduresRecurringEditor-modal"
      >
        <Modal.Header closeButton={false}>
          <Modal.Title id="contained-modal-title-vcenter">Procedure Recurrence</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ProceduresRecurringEditor-editor-container">
          <Grid>
            <Grid.Row className="ProceduresRecurringEditor-grid">
              <Grid.Column>
                <div className="ProceduresRecurringEditor-box">
                  <ComponentTitle title="Activity Time" />
                  <Form
                    id="form"
                    formData={recurrence}
                    readOnly={false}
                    showColonAfterLabel={true}
                    labelLocation={"left"}
                    minColWidth={550}
                    colCount={2}
                    width={650}
                  >
                    <GroupItem>
                      <SimpleItem
                        dataField="StartTime"
                        editorType="dxDateBox"
                        editorOptions={{
                          type: "time",
                        }}
                      />
                      <SimpleItem
                        dataField="EndTime"
                        editorType="dxDateBox"
                        editorOptions={{
                          type: "time",
                        }}
                      />
                      <SimpleItem dataField="Duration" />
                    </GroupItem>
                  </Form>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="ProceduresRecurringEditor-grid">
              <Grid.Column>
                <div className="ProceduresRecurringEditor-box">
                  <ComponentTitle title="Recurrence Pattern" />

                  <div className="ProceduresRecurringEditor-patterns-group">
                    <RadioGroup
                      items={types.recurrencePatterns}
                      value={selectedRecurrenceType}
                      //defaultValue={selectedRecurrenceType}
                      onValueChanged={(e) => onRecurrenceTypeChange(e)}
                    />
                    <DaysPattern
                      recurrenceValues={recurrence.RecurrenceValues}
                      onUpdatedRecurrence={(e) => handleUpdatedRecurrenceValues(e)}
                    />
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="ProceduresRecurringEditor-grid">
              <Grid.Column>
                <div className="ProceduresRecurringEditor-box">
                  <ComponentTitle title="Range of Recurrence" />
                  <Form
                    id="form"
                    formData={recurrence}
                    readOnly={false}
                    showColonAfterLabel={true}
                    labelLocation={"left"}
                    minColWidth={550}
                    colCount={2}
                    width={650}
                  >
                    <GroupItem>
                      <SimpleItem
                        dataField="StartDate"
                        editorType="dxDateBox"
                        editorOptions={{
                          type: "date",
                        }}
                      />
                      <SimpleItem
                        dataField="EndDate"
                        editorType="dxDateBox"
                        editorOptions={{
                          type: "date",
                        }}
                      />
                    </GroupItem>
                  </Form>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="ProceduresRecurringEditor-grid">
              <Grid.Column>
                <div className="ProceduresRecurringEditor-box">
                  <div className="ProceduresRecurringEditor-summary">
                    <TextArea value="hello world" isReadOnly="true" height={90} />
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => onConfirm()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProceduresRecurringEditor;
