import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import { EmptyFn } from "../../../shared/types";
import ProceduresConditions from "../procedures-details/procedures-conditions/ProceduresConditions";
import ProceduresFrom from "../procedures-details/procedures-from/ProceduresFrom";
import ProceduresSteps from "../procedures-steps/ProceduresSteps";
import "./procedures-editor.scss";

const ProceduresEditor = ({
  procedure,
  isReadOnly,
  show = EmptyFn,
  close = EmptyFn,
  confirm = EmptyFn,
}) => {
  const [condition, setCondition] = useState({});
  console.log("ProceduresEditor---procedure: ", procedure);
  console.log("ProceduresEditor---condition: ", condition);

  useEffect(() => {
    const { ProcedureCondition = {} } = procedure;
    const { Name = "" } = procedure;
    setCondition(ProcedureCondition);
  }, [procedure.id]);

  return (
    <>
      <Modal size="lg" show={show} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Procedure Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ProceduresEditor-container">
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <ProceduresFrom procedure={procedure} isReadOnly={isReadOnly} />
              </Grid.Column>
              <Grid.Column className="ProceduresDetails-Conditions">
                <ProceduresConditions procedureCondition={condition} isReadOnly={isReadOnly} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column className="ProceduresDetails-Conditions">
                <ProceduresSteps procedure={procedure} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={confirm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProceduresEditor;
