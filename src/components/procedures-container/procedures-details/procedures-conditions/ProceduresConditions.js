import React, { useState, useEffect, useRef } from "react";
import Form, { GroupItem, SimpleItem, Label } from "devextreme-react/form";
import { SelectBox } from "devextreme-react/select-box";
import EventTypes from "../../../../assets/mock-data/EventTypes.json";
import EventSeverities from "../../../../assets/mock-data/EventSeverities.json";
import "./procedures-conditions.scss";

const ProceduresConditions = ({ procedureCondition = {}, isReadOnly }) => {
  const isCancelled = useRef(false);
  const [eventSubtypes, setEventSubtypes] = useState([]);
  //console.log("procedureCondition: ", procedureCondition);

  const getEventSubTypes = (eventId) => {
    const event = EventTypes.filter((s) => s.ParentId === eventId).EventTypeId;
    console.log("eventId: ", event);
    //const subTypesObj = JSON.parse(EventTypes);
    const subTypes = EventTypes.filter((p) => {
      if (p.ParentId === eventId) {
        return p;
      }
    });
    console.log("subTypes: ", subTypes);
    setEventSubtypes(subTypes);
  };

  useEffect(() => {
    !isCancelled.current && getEventSubTypes(2);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ProceduresConditions-container">
      <Form
        id="form"
        formData={procedureCondition}
        readOnly={isReadOnly}
        showColonAfterLabel={true}
        labelLocation={"left"}
        minColWidth={550}
        colCount={2}
        width={650}
      >
        <GroupItem caption="Conditions">
          <SimpleItem
            dataField="EventTypeID"
            editorType="dxSelectBox"
            editorOptions={{
              items: EventTypes,
              valueExpr: "EventTypeId",
              displayExpr: "EventTypeName",
              value: procedureCondition.EventTypeId
            }}
          >
            <Label visible={true} text={"Event Type"} />
          </SimpleItem>
          <SimpleItem
            dataField="EventTypeID"
            editorType="dxSelectBox"
            editorOptions={{
              items: EventTypes,
              valueExpr: "EventTypeId",
              displayExpr: "EventTypeName",
              value: procedureCondition.EventTypeId,
            }}
          >
            <Label visible={true} text={"Event SubType"} />
          </SimpleItem>
          {/* <SimpleItem
            // dataField="EventTypeID"
            editorType="dxSelectBox"
            // editorOptions={{
            //   items: EventTypes.map((p) => p.EventTypeId === procedureCondition.EventTypeId),
            //   valueExpr: "EventTypeId",
            //   displayExpr: "EventTypeName",
            //   value: EventTypes.map((p) => p.EventTypeId === procedureCondition.EventTypeId),
            // }}
          >
            <Label visible={true} text={"Event Sub Type"} />
            <SelectBox
              dataSource={eventSubtypes}
              valueExpr="EventTypeId"
              displayExpr="EventTypeName"
            />
          </SimpleItem> */}
          <SimpleItem
            dataField="Severity"
            editorType="dxSelectBox"
            editorOptions={{
              items: EventSeverities,
              valueExpr: "EventSeverityID",
              displayExpr: "EventSeverityName",
              value: procedureCondition.EventSeverityID,
            }}
          />
          <SimpleItem dataField="GeoAreaID">
            <Label visible={true} text={"Location"} />
          </SimpleItem>
          <SimpleItem dataField="Recurring" />
        </GroupItem>
      </Form>
    </div>
  );
};

export default ProceduresConditions;
