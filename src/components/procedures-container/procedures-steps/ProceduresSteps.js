import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import classNames from "classnames";
import ComponentTitle from "../../../shared/component-title/ComponentTitle";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure = {} }) => {
  const [activeRowId, setActiveRowId] = useState(undefined);
  const [steps, setSteps] = useState([]);
  const { ProcedureSteps = [] } = procedure;

  const selectedClassName = (selectedId) =>
    classNames("ProceduresSteps-row-item", { selected: activeRowId === selectedId });

  return (
    <div className="ProceduresSteps-container">
      <ComponentTitle title="Steps" />
      <Table singleLine selectable>
        <Table.Header className="ProceduresSteps-table-header">          
          <Table.Row className="ProceduresSteps-header-rows">
            <Table.HeaderCell colSpan="3">Instructions :</Table.HeaderCell>
          </Table.Row>
          <Table.Row className="ProceduresSteps-header-rows">
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Instruction</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {ProcedureSteps &&
            ProcedureSteps.map((row) => (
              <Table.Row key={row.SequenceNumber} className={selectedClassName(row.id)}>
                <Table.Cell>{row.SequenceNumber}</Table.Cell>
                <Table.Cell>{row.Title}</Table.Cell>
                <Table.Cell>{row.Instruction}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProceduresSteps;
