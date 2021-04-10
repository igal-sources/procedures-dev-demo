import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import ProceduresConditions from "./procedures-conditions/ProceduresConditions";
import ProceduresFrom from "./procedures-from/ProceduresFrom";
import ComponentTitle from "../../../shared/component-title/ComponentTitle";
import new_procedure from "../../../images/32_procedure.png";
import "./procedures-details.scss";

const ProceduresDetails = ({ procedure, isReadOnly }) => {
  const [procedureName, setProcedureName] = useState("");
  const [condition, setCondition] = useState({});

  useEffect(() => {
    const { ProcedureCondition = {} } = procedure;
    const { Name = "" } = procedure;
    setProcedureName(Name);
    setCondition(ProcedureCondition);
  }, [procedure]);

  return (
    <div className="ProceduresDetails-container">
      <ComponentTitle title={procedureName} image={new_procedure} />
      <Grid>
        <Grid.Column className="ProceduresDetails-Conditions" width={8}>
          <ProceduresConditions procedureCondition={condition} isReadOnly={isReadOnly} />
        </Grid.Column>
        <Grid.Column className="ProceduresConditions-From" width={8}>
          <ProceduresFrom procedure={procedure} isReadOnly={isReadOnly} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProceduresDetails;
