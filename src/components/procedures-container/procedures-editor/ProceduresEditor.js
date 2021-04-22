import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import * as types from "../../../shared/types";
import ProceduresConditions from "../procedures-details/procedures-conditions/ProceduresConditions";
import ProceduresFrom from "../procedures-details/procedures-from/ProceduresFrom";
import ProceduresSteps from "../procedures-steps/ProceduresSteps";
import "./procedures-editor.scss";

const ProceduresEditor = ({
  procedure,
  isReadOnly,
  show = types.EmptyFn,
  close = types.EmptyFn,
  confirm = types.EmptyFn,
}) => {
  const [condition, setCondition] = useState({});

  useEffect(() => {
    const { ProcedureCondition = {} } = procedure;
    setCondition(ProcedureCondition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure.id]);

  return (
    <>
      <Modal size="lg" show={show} backdrop="static" keyboard={false}>
        <Modal.Header closeButton={false}>
          <Modal.Title>Procedure Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ProceduresEditor-container">
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <ProceduresFrom procedure={procedure} isReadOnly={isReadOnly} />
              </Grid.Column>
              <Grid.Column>
                <ProceduresConditions procedureCondition={condition} isReadOnly={isReadOnly} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <ProceduresSteps procedure={procedure} isReadOnly={isReadOnly} />
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
