import React, { useEffect, useState, useRef } from "react";
import { Grid } from "semantic-ui-react";
import { getAllServerProcedures } from "../../services/procedures-http.service";
import ProceduresList from "./procedures-list/ProceduresList";
import ProceduresDetails from "./procedures-details/ProceduresDetails";
import ProceduresSteps from "./procedures-steps/ProceduresSteps";
import Header from "../main-container/header/Header";
import moment from "moment";
import "./procedures-main.scss";

const ProceduresMain = () => {
  const isCancelled = useRef(false);
  const [procedures, setProcedures] = useState([]);
  console.log("ProceduresMain-useState-procedures: ", procedures);
  const [selectedProcedure, setSelectedProcedure] = useState({});

  const fetchData = () => {
    console.log("ProceduresMain-fetchData: ");
    getAllServerProcedures((procResponse) => {
      const { proceduresList = [] } = procResponse;
      console.log("ProceduresMain-Procedures From Server :", proceduresList);
      setProcedures(proceduresList);
    });
  };

  const getDate = () => {
    if (window.proto) {
      const proto = window.proto;
      const timestamp = new proto.google.protobuf.Timestamp();
      const timeMS = Date.now();
      timestamp.setSeconds(timeMS / 1000);
      timestamp.setNanos((timeMS % 1000) * 1e6);

      return timestamp;
    }
  };

  const handleSelectedProcedure = (id) => {
    console.log("handleSelectedProcedure-ProcedureId: ", id);
    localStorage.setItem("procedureId", id);

    const selectedProc = procedures.find((obj) => obj.procedureid === id);
    setSelectedProcedure(selectedProc);
    localStorage.setItem("selectedProcedure", JSON.stringify(selectedProc));
    console.log("selectedProc: ", selectedProc);
  };

  useEffect(() => {
    console.log("ProceduresMain-useEffect: ");
    !isCancelled.current && fetchData();
    //fetchData();
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProcedure.procedureid]);

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
