import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import ProceduresConditions from "./procedures-conditions/ProceduresConditions";
import ProceduresFrom from "./procedures-from/ProceduresFrom";
import ComponentTitle from "../../../shared/custom-components/component-title/ComponentTitle";
import new_procedure from "../../../images/32_procedure.png";
import "./procedures-details.scss";

const ProceduresDetails = ({ procedure, isReadOnly }) => {
  const [procedureName, setProcedureName] = useState("");

  useEffect(() => {
    const { name = "" } = procedure;
    setProcedureName(name);
  }, [procedure]);

  return (
    <div className="ProceduresDetails-container">
      <ComponentTitle title={procedureName} image={new_procedure} />
      <Grid>
        <Grid.Column className="ProceduresDetails-Conditions" width={7}>
          <ProceduresConditions procedure={procedure} isReadOnly={isReadOnly} />
        </Grid.Column>
        <Grid.Column className="ProceduresConditions-From" width={7}>
          <ProceduresFrom procedure={procedure} isReadOnly={isReadOnly} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProceduresDetails;
