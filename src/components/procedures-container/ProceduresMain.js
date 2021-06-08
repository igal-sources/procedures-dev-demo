import React, { useEffect, useState, useRef } from "react";
import { Grid } from "semantic-ui-react";
import { getAllServerProcedures } from "../../services/procedures-http.service";
import ProceduresList from "./procedures-list/ProceduresList";
import ProceduresDetails from "./procedures-details/ProceduresDetails";
import ProceduresSteps from "./procedures-steps/ProceduresSteps";
import Header from "../main-container/header/Header";
import webProto from "../../proto/procedures_pb";
import "./procedures-main.scss";

const ProceduresMain = () => {
  const isCancelled = useRef(false);
  const [procedures, setProcedures] = useState([]);
  const [proceduresProto, setProceduresProto] = useState();
  const [selectedProcedure, setSelectedProcedure] = useState({});

  const fetchData = () => {
    //localStorage.clear();
    localStorage.removeItem("selectedProcedureId");
    localStorage.removeItem("selectedIndexServerProcedure");
    localStorage.removeItem("selectedProtoProcedure");
    localStorage.removeItem("selectedProcedure");

    var userId = localStorage.getItem("userId");
    var userName = localStorage.getItem("userName");
    var organizationId = localStorage.getItem("organizationId");

    localStorage.setItem("userId", userId === null ? "Demo User" : userId);
    localStorage.setItem("userName", userName === null ? "Demo User" : userName);
    localStorage.setItem("organizationId", organizationId === null ? "1" : organizationId);

    getAllServerProcedures((procResponse) => {
      const { proceduresList = [] } = procResponse.toObject();
      console.log("ProceduresMain-Procedures From Server :", proceduresList);
      setProceduresProto(procResponse);
      setProcedures(proceduresList);
    });
  };

  const handleSelectedProcedure = (id) => {
    console.log("selectedProcedureId: ", id);
    localStorage.setItem("selectedProcedureId", id);

    const selectedProc = procedures.find((obj) => obj.procedureid === id);
    setSelectedProcedure(selectedProc);

    const selectedProcIndex = procedures.findIndex((obj) => obj.procedureid === id);
    localStorage.setItem("selectedIndexServerProcedure", selectedProcIndex);

    localStorage.setItem("selectedProtoProcedure", proceduresProto[selectedProcIndex]);
    localStorage.setItem("selectedProcedure", JSON.stringify(selectedProc));
    console.log("Selected Procedure: ", selectedProc);
  };

  useEffect(() => {
    // console.log("ProceduresMain-useEffect: ");
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
