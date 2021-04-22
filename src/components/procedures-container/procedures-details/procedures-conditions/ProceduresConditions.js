import React from "react";
import Form, { GroupItem, SimpleItem, Label } from "devextreme-react/form";
import EventTypes from "../../../../assets/mock-data/EventTypes.json";
import EventSeverities from "../../../../assets/mock-data/EventSeverities.json";
import "./procedures-conditions.scss";

const ProceduresConditions = ({ procedureCondition = {}, isReadOnly }) => {
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
              value: procedureCondition.EventTypeId,
            }}
          >
            <Label visible={true} text={"Event Type"} />
          </SimpleItem>
          <SimpleItem dataField="EventSubTypeID">
            <Label visible={true} text={"Event Sub Type"} />
          </SimpleItem>
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
