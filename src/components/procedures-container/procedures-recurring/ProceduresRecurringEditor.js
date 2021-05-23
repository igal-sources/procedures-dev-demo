import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import Form, { GroupItem, SimpleItem } from "devextreme-react/form";
import DateBox from "devextreme-react/date-box";
import TextBox from "devextreme-react/text-box";
import TextArea from "devextreme-react/text-area";
import { CheckBox } from "devextreme-react/check-box";
import RadioGroup from "devextreme-react/radio-group";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import DaysPattern from "../../../shared/custom-components/days-pattern/DaysPattern";
import * as types from "../../../shared/types";
import { scheduleTaskType } from "../../../shared/enums";
import "./procedures-recurring-editor.scss";

const ProceduresRecurringEditor = ({
  procedure,
  isReadOnly,
  actionType,
  show = types.EmptyFn,
  close = types.EmptyFn,
  confirm = types.EmptyFn,
}) => {
  const [recurrence, setRecurrence] = useState({});
  //console.log("recurrence: ", recurrence);

  const initData = (action) => {
    const { ProcedureCondition = {} } = procedure;
    //console.log("procedure: ", procedure);
    const { ProceduresSchedules = {} } = ProcedureCondition;

    ProceduresSchedules.EndDate =
      ProceduresSchedules.EndDate === "" ? new Date() : ProceduresSchedules.EndDate;
    ProceduresSchedules.EndTime =
      ProceduresSchedules.EndTime === "" ? new Date() : ProceduresSchedules.EndTime;
    ProceduresSchedules.StartDate =
      ProceduresSchedules.StartDate === "" ? new Date() : ProceduresSchedules.StartDate;
    ProceduresSchedules.StartTime =
      ProceduresSchedules.StartTime === "" ? new Date() : ProceduresSchedules.StartTime;
    //console.log("ProceduresSchedules: ", ProceduresSchedules);
    setRecurrence(ProceduresSchedules);

    switch (action) {
      case types.actions.ADD:
        break;
      case types.actions.EDIT:
        break;
      default:
        break;
    }
  };

  const handleUpdatedRecurrenceValues = (values) => {
    console.log("handleUpdatedRecurrenceValues: ", values);
  };

  const onDaysPatternValueChanged = (args) => {
    const checkBoxValue = args.value;
    //console.log("checkBoxValue: ", checkBoxValue);
  };

  const onConfirm = (action) => {
    //console.log("ProceduresRecurringEditor-onConfirm: ", recurrence);
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
                          displayFormat: "HH:mm:ss",
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
                      defaultValue={types.recurrencePatterns[0]}
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
          <Button variant="primary" type="submit" onClick={() => onConfirm(actionType)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProceduresRecurringEditor;
