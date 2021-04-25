import React, { useEffect, useState, useRef } from "react";
import { Grid } from "semantic-ui-react";
import { getAllProcedures, getProcedure } from "../../services/procedures-http.service";
import ProceduresList from "./procedures-list/ProceduresList";
import ProceduresDetails from "./procedures-details/ProceduresDetails";
import ProceduresSteps from "./procedures-steps/ProceduresSteps";
import "./procedures-main.scss";

const ProceduresMain = () => {
  const isCancelled = useRef(false);
  const [procedures, setProcedures] = useState([]);
  const [selectedProcedure, setSelectedProcedure] = useState({});

  const fetchData = () => {
    getAllProcedures().then((res) => {
      setProcedures(res.data);
      setSelectedProcedure(res.data[0]);
    });
  };

  const handleSelectedProcedure = (id) => {
    localStorage.setItem("procedureId", id);
    
    getProcedure(id).then((res) => {
      setSelectedProcedure(res.data);
      localStorage.setItem("selectedProcedure", JSON.stringify(res.data));
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchData();
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedures]);

  return (
    <div className="ProceduresMain-container">
      <Grid>
        <Grid.Column className="ProceduresMain-ProceduresList" width={10}>
          <ProceduresList
            procedures={procedures}
            onSelected={(id) => handleSelectedProcedure(id)}
            className="ProceduresMain-ProceduresList"
          />
        </Grid.Column>
        <Grid.Column className="ProceduresMain-ProceduresConditions" width={6}>
          <ProceduresDetails procedure={selectedProcedure} isReadOnly={true} />
          <ProceduresSteps procedure={selectedProcedure} isReadOnly={true} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProceduresMain;
