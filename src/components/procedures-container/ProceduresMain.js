import React, { useEffect, useState, useRef } from "react";
import { Grid } from "semantic-ui-react";
import {
  getAllServerProcedures,
  getAllProcedures,
  getProcedure,
} from "../../services/procedures-http.service";
// import {
//   getAllProcedures,
//   getProcedure,
//   getAllServerProcedures,
// } from "../../services/procedures-http.service";
import ProceduresList from "./procedures-list/ProceduresList";
import ProceduresDetails from "./procedures-details/ProceduresDetails";
import ProceduresSteps from "./procedures-steps/ProceduresSteps";
import Header from "../main-container/header/Header";
import "./procedures-main.scss";

const ProceduresMain = () => {
  const isCancelled = useRef(false);
  const [procedures, setProcedures] = useState([]);
  //console.log("ProceduresMain-procedures: ", procedures);
  const [selectedProcedure, setSelectedProcedure] = useState({});

  const fetchData = () => {
    // const result = getAllServerProcedures();
    // console.log("Main -result: ", result);

    getAllProcedures().then((res) => {
      setProcedures(res.data);
      setSelectedProcedure(res.data[0]);
      localStorage.setItem("procedureId", selectedProcedure.id);
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
      <div className="App-header">
        <Header />
      </div>
      <Grid>
        <Grid.Column className="ProceduresMain-ProceduresList" width={9}>
          <ProceduresList
            procedures={procedures}
            onSelected={(id) => handleSelectedProcedure(id)}
          />
        </Grid.Column>
        <Grid.Column className="ProceduresMain-ProceduresConditions" width={7}>
          <div className="ProceduresMain-ProceduresDetails">
            <ProceduresDetails procedure={selectedProcedure} isReadOnly={true} />
          </div>
          <div className="ProceduresMain-ProceduresSteps">
            <ProceduresSteps procedure={selectedProcedure} isReadOnly={true} heightValue="65vh" />
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProceduresMain;
