import React, { useEffect, useState, useRef } from "react";
import { Grid } from "semantic-ui-react";
import { getAllServerProcedures, updateProcedure } from "../../services/procedures-http.service";
import ProceduresList from "./procedures-list/ProceduresList";
import ProceduresDetails from "./procedures-details/ProceduresDetails";
import ProceduresSteps from "./procedures-steps/ProceduresSteps";
import Header from "../main-container/header/Header";
import { struct, list } from "pb-util";
import webProto from "../../proto/procedures_pb";
import "./procedures-main.scss";

const ProceduresMain = () => {
  const isCancelled = useRef(false);
  const [procedures, setProcedures] = useState([]);
  const [proceduresProto, setProceduresProto] = useState();
  const [selectedProcedure, setSelectedProcedure] = useState({});
  //console.log("ProceduresMain-useState-procedures: ", procedures);

  const getAllFunctions = () => {
    var myFunctions = [];
    for (var l in webProto) {
      if (
        webProto.hasOwnProperty(l) &&
        webProto[l] instanceof Function &&
        !/myFunctions/i.test(l)
      ) {
        myFunctions.push(webProto[l]);
      }
    }

    console.log("myFunctions: ", myFunctions);
  };

  const fetchData = () => {
    //var userId = localStorage.getItem("userId");
    //var OrganizationId = localStorage.getItem("OrganizationId");

    //getAllFunctions();

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
