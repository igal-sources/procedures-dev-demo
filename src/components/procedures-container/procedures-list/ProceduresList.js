import React, { useState } from "react";
import { Table, Checkbox, Dropdown } from "semantic-ui-react";
import classNames from "classnames";
import { EmptyFn } from "../../../shared/types";
import ComponentTitle from "../../../shared/component-title/ComponentTitle";
import "./procedures-list.scss";

const ProceduresList = ({ procedures, onSelected = EmptyFn }) => {
  const [activeRowId, setActiveRowId] = useState(undefined);

  const handleSelected = (id) => {
    onSelected(id);
    setActiveRowId(id);
  };

  const selectedClassName = (selectedId) =>
    classNames("ProceduresList-row-item", { selected: activeRowId === selectedId });

  return (
    <div className="ProceduresList-container">
      <ComponentTitle title={"Procedures"} />
      <Table singleLine selectable>
        <Table.Header className="ProceduresList-table-header">
          <Table.Row className="ProceduresList-header-rows">
            <Table.HeaderCell>System Id</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Event Type</Table.HeaderCell>
            <Table.HeaderCell>Severity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {procedures.map((row) => (
            <Table.Row
              className={selectedClassName(row.id)}
              key={row.id}
              onClick={() => handleSelected(row.id)}
            >
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>
                <Checkbox checked={row.IsActive} name={row.id} />
              </Table.Cell>
              <Table.Cell>{row.Name}</Table.Cell>
              <Table.Cell>
                {/* <Dropdown fluid selection options={row.ProcedureCondition.EventTypeID} /> */}
              </Table.Cell>
              <Table.Cell>{row.ProcedureCondition.Severity}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProceduresList;
