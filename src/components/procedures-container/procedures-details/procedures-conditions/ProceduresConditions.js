import React, { useState, useEffect, useRef } from "react";
import Form, { GroupItem, SimpleItem, Label } from "devextreme-react/form";
import ProceduresRecurringEditor from "../../procedures-recurring/ProceduresRecurringEditor";
import { Button } from "react-bootstrap";
import { CheckBox } from "devextreme-react/check-box";
import * as types from "../../../../shared/types";
import EventTypes from "../../../../assets/mock-data/EventTypes.json";
import EventSeverities from "../../../../assets/mock-data/EventSeverities.json";
import "./procedures-conditions.scss";

const ProceduresConditions = ({ procedure, isReadOnly }) => {
  const isCancelled = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [eventSubTypes, setEventSubtypes] = useState([]);
  const [eventParentTypes, setEventParentTypes] = useState([]);
  const [condition, setCondition] = useState({});
  const [hasRecurring, setHasRecurring] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState([]);

  const onClose = () => setIsOpen(false);

  const onConfirm = () => setIsOpen(false);

  const openRecurringEditor = () => setIsOpen(true);

  const initData = () => {
    setSelectedProcedure(procedure);
    const { ProcedureCondition = {} } = procedure;
    setCondition(ProcedureCondition);
    const { ProceduresSchedules } = ProcedureCondition;
    setHasRecurring(ProceduresSchedules !== null);
    setEventParentTypes(EventTypes.filter((e) => e.ParentId === -1));
    isReadOnly ? setEventSubtypes(EventTypes) : getEventSubTypes(ProcedureCondition.EventTypeID);
  };

  const removeRecurringValues = () => {
    const updateProcedure = Object.assign({}, procedure, {
      ProcedureCondition: {
        ...procedure.ProcedureCondition,
        ProceduresSchedules: types.emptyRecurrence,
      },
    });

    //procedure.ProcedureCondition.ProceduresSchedules = types.emptyRecurrence;

    setSelectedProcedure(updateProcedure);
    console.log("Selected procedure: ", procedure);
    setHasRecurring(false);
  };

  const eventTypeValueChanged = ({ component }) => {
    const selectedItem = component.option("selectedItem");
    if (selectedItem !== null) {
      const { EventTypeId = {} } = selectedItem && selectedItem;
      getEventSubTypes(EventTypeId);
    }
  };

  const RecurringControl = () => {
    if (isReadOnly === false) {
      return (
        <div className="recurringControl-container">
          <div>Recurring</div>
          <div className="recurringControl-buttons">
            <Button className="recurringControl-button" onClick={openRecurringEditor}>
              Select
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className="recurringControl-button" onClick={removeRecurringValues}>
              Delete
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="recurringControl-container">
          <div>Recurring</div>
          <div>
            <CheckBox className="recurringControl-checkBox" value={hasRecurring} />
          </div>
        </div>
      );
    }
  };

  const getEventSubTypes = (eventId) => {
    const subTypes = EventTypes.filter((p) => {
      if (p.ParentId === eventId) {
        return p;
      }
    });
    setEventSubtypes(subTypes);
  };

  useEffect(() => {
    initData();
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure]);

  return (
    <div className="ProceduresConditions-container">
      <ProceduresRecurringEditor
        show={isOpen}
        close={onClose}
        confirm={onConfirm}
        procedure={selectedProcedure}
        isReadOnly={isReadOnly}
      />
      <Form
        id="form"
        formData={condition}
        readOnly={isReadOnly}
        showColonAfterLabel={true}
        labelLocation={"left"}
        minColWidth={550}
        colCount={2}
        width={700}
      >
        <GroupItem caption="Conditions">
          <SimpleItem
            id="eventType"
            isRequired={true}
            dataField="EventTypeID"
            editorType="dxSelectBox"
            editorOptions={{
              items: eventParentTypes,
              valueExpr: "EventTypeId",
              displayExpr: "EventTypeName",
              onValueChanged: eventTypeValueChanged,
              value: condition.EventTypeID,
            }}
          >
            <Label visible={true} text={"Event Type"} />
          </SimpleItem>
          <SimpleItem
            dataField="EventSubTypeID"
            isRequired={true}
            editorType="dxSelectBox"
            editorOptions={{
              items: eventSubTypes,
              valueExpr: "EventTypeId",
              displayExpr: "EventTypeName",
              value: condition.EventSubTypeID,
            }}
          >
            <Label visible={true} text={"Event SubType"} />
          </SimpleItem>
          <SimpleItem
            dataField="Severity"
            editorType="dxSelectBox"
            editorOptions={{
              items: EventSeverities,
              valueExpr: "EventSeverityID",
              displayExpr: "EventSeverityName",
              value: condition.Severity,
            }}
          />
          <SimpleItem dataField="GeoAreaID">
            <Label visible={true} text={"Location"} />
          </SimpleItem>
        </GroupItem>
      </Form>
      <RecurringControl />
    </div>
  );
};

export default ProceduresConditions;
