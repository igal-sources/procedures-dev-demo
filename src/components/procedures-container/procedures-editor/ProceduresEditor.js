import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import * as types from "../../../shared/types";
import ProceduresConditions from "../procedures-details/procedures-conditions/ProceduresConditions";
import ProceduresFrom from "../procedures-details/procedures-from/ProceduresFrom";
import ProceduresSteps from "../procedures-steps/ProceduresSteps";
import { toProtoFromDate } from "../../../shared/dates-helper";
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
    const protoTimestamp = toProtoFromDate(today);
    // console.log("protoTimestamp: ", protoTimestamp);
    const protoNanos = protoTimestamp.getNanos();
    const protoSeconds = protoTimestamp.getSeconds();

    switch (action) {
      case types.actions.ADD:
        procedure.procedureid = uuidv4();
        procedure.organizationid = localStorage.getItem("organizationId");
        procedure.creatinguserid = localStorage.getItem("userId");
        procedure.modifyuserid = localStorage.getItem("userId");
        procedure.creationdate = {
          seconds: protoSeconds,
          nanos: protoNanos,
        };
        procedure.modifydate = {
          seconds: protoSeconds,
          nanos: protoNanos,
        };
        procedure.validitydate = {
          seconds: protoSeconds,
          nanos: protoNanos,
        };
        break;
      case types.actions.EDIT:
        procedure.modifydate = {
          seconds: protoSeconds,
          nanos: protoNanos,
        };
        procedure.modifyuserid = localStorage.getItem("userId");

        break;
      default:
        break;
    }

    console.log("ProceduresEditor-procedure: ", procedure);
  };

  const onConfirm = (action) => {
    console.log("onConfirm - procedure, action: ", procedure, action);
    switch (action) {
      case types.actions.ADD:
        console.log("createProcedure-procedure: ", procedure);
        createProcedure(procedure);
        break;
      case types.actions.EDIT:
        console.log("updateProcedure-procedure: ", procedure);
        updateProcedure(procedure);
        break;
      default:
        break;
    }

    localStorage.setItem("selectedProcedure", JSON.stringify(procedure));
    confirm();
  };

  useEffect(() => {
    initData(actionType);

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
                  className="ProceduresEditor-steps-grid"
                  procedure={procedure}
                  isReadOnly={isReadOnly}
                  actionType={actionType}
                  heightValue="190px"
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
