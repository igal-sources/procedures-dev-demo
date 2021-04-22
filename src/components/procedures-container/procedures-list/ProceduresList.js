import React from "react";
import { Checkbox } from "semantic-ui-react";
import { DataGrid, Column, Lookup } from "devextreme-react/data-grid";
import * as types from "../../../shared/types";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import EventTypes from "../../../assets/mock-data/EventTypes.json";
import EventSeverities from "../../../assets/mock-data/EventSeverities.json";
import "./procedures-list.scss";
import { Center } from "devextreme-react/map";

const ProceduresList = ({ procedures, onSelected = types.EmptyFn }) => {
  const handleSelected = ({ selectedRowsData }) => {
    const { id } = selectedRowsData[0];
    onSelected(id);
  };

  return (
    <div className="ProceduresList-container">
      <ComponentTitle title={"Procedures"} />
      <DataGrid
        allowColumnReordering={true}
        selection={{ mode: "single" }}
        columnAutoWidth={true}
        hoverStateEnabled={true}
        onSelectionChanged={handleSelected}
        dataSource={procedures}
        keyExpr="id"
        showColumnLines={true}
        showRowLines={false}
        showBorders={true}
        rowAlternationEnabled={true}
      >
        <Column dataField="id" caption="Id" alignment="center"></Column>
        <Column type={Checkbox} dataField="IsActive" caption="Active"></Column>
        <Column dataField="Name" width={400}></Column>
        <Column caption="Event Type" width={270} dataField="ProcedureCondition.EventTypeID">
          <Lookup dataSource={EventTypes} valueExpr="EventTypeId" displayExpr="EventTypeName" />
        </Column>
        <Column dataField="ProcedureCondition.EventTypeID" caption="Type" width={270}>
          <Lookup dataSource={EventTypes} valueExpr="EventTypeId" displayExpr="EventTypeName" />
        </Column>
        <Column dataField="ProcedureCondition.Severity" caption="Severity" width={80}>
          <Lookup
            dataSource={EventSeverities}
            valueExpr="EventSeverityID"
            displayExpr="EventSeverityName"
          />
        </Column>
      </DataGrid>
    </div>
  );
};

export default ProceduresList;
