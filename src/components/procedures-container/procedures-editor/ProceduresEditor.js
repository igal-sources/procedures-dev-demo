import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import * as types from "../../../shared/types";
import ProceduresConditions from "../procedures-details/procedures-conditions/ProceduresConditions";
import ProceduresFrom from "../procedures-details/procedures-from/ProceduresFrom";
import ProceduresSteps from "../procedures-steps/ProceduresSteps";
import { createProcedure, updateProcedure } from "../../../services/procedures-http.service";
import "./procedures-editor.scss";

const ProceduresEditor = ({
  procedure,
  isReadOnly,
  actionType,
  show = types.EmptyFn,
  close = types.EmptyFn,
  confirm = types.EmptyFn,
}) => {
  const initData = (action) => {
    let today = new Date();

    switch (action) {
      case types.actions.ADD:
        procedure.id = uuidv4();
        procedure.OrganizationId = 1; //TODO: from outside
        procedure.CreatingUserId = 1; //TODO: from outside
        procedure.ModifyUserId = 1; //TODO: from outside
        procedure.CreationDate = today.toISOString();
        procedure.ModifyDate = today.toISOString();
        procedure.ValidityDate = new Date().toISOString();
        break;
      case types.actions.EDIT:
        procedure.ModifyDate = today.toISOString();
        procedure.ModifyUserId = 1; //TODO: from outside
        break;
      default:
        break;
    }
  };

  const onConfirm = (action) => {
    console.log("onConfirm - procedure, action: ", procedure, action);
    switch (action) {
      case types.actions.ADD:
        createProcedure(procedure);
        break;
      case types.actions.EDIT:
        updateProcedure(procedure.id, procedure);
        break;
      default:
        break;
    }

    localStorage.setItem("selectedProcedure", JSON.stringify(procedure));
    confirm();
  };

  useEffect(() => {
    initData(actionType);
    console.log("useEffect: ", actionType);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure]);

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
                <ProceduresConditions procedure={procedure} isReadOnly={isReadOnly} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <ProceduresSteps
                  procedure={procedure}
                  isReadOnly={isReadOnly}
                  actionType={actionType}
                />
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
    </>
  );
};

export default ProceduresEditor;
