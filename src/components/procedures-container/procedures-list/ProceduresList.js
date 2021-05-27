import React from "react";
import { Checkbox } from "semantic-ui-react";
import { DataGrid, Column, Lookup, Editing, Pager, Paging } from "devextreme-react/data-grid";
import * as types from "../../../shared/types";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import EventTypes from "../../../assets/mock-data/EventTypes.json";
import EventSeverities from "../../../assets/mock-data/EventSeverities.json";
import "./procedures-list.scss";

const ProceduresList = ({ procedures, onSelected = types.EmptyFn }) => {
  console.log("ProceduresList-procedures: ", procedures);
  const handleSelected = ({ selectedRowsData }) => {
    const { procedureid } = selectedRowsData[0];
    onSelected(procedureid);
  };

  // useEffect(() => {
  //   return () => {};
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [procedures]);

  return (
    <div className="ProceduresList-container">
      <ComponentTitle title={"Procedures"} />
      <DataGrid
        style={{ height: "87vh" }}
        dataSource={procedures}
        repaintChangesOnly={true}
        allowColumnReordering={true}
        selection={{ mode: "single" }}
        columnAutoWidth={true}
        hoverStateEnabled={true}
        onSelectionChanged={handleSelected}
        keyExpr="procedureid"
        showColumnLines={true}
        showRowLines={false}
        showBorders={true}
        rowAlternationEnabled={true}
      >
        <Paging defaultPageSize={20} />
        <Pager
          showPageSizeSelector={true}
          visible={true}
          allowedPageSizes={[5, 10, 20]}
          showInfo={true}
        />
        <Editing mode="row" confirmDelete={true} />
        {/* <Column dataField="id" caption="Id" alignment="center"></Column> */}
        <Column type={Checkbox} dataField="isactive" caption="Active" width={60}></Column>
        <Column dataField="name" width={400}></Column>
        <Column caption="Event Type" dataField="condition.eventtypeid" width={260}>
          <Lookup dataSource={EventTypes} valueExpr="EventTypeId" displayExpr="EventTypeName" />
        </Column>
        <Column caption="Type" dataField="condition.eventsubtypeid" width={255}>
          <Lookup dataSource={EventTypes} valueExpr="EventTypeId" displayExpr="EventTypeName" />
        </Column>
        <Column dataField="condition.severity" caption="Severity" width={80}>
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
