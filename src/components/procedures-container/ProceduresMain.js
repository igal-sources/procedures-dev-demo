import React, { useEffect, useState, useRef } from "react";
import { Grid } from "semantic-ui-react";
import { getAllServerProcedures, updateProcedure } from "../../services/procedures-http.service";
import ProceduresList from "./procedures-list/ProceduresList";
import ProceduresDetails from "./procedures-details/ProceduresDetails";
import ProceduresSteps from "./procedures-steps/ProceduresSteps";
import Header from "../main-container/header/Header";
import { struct, list } from "pb-util";
import "./procedures-main.scss";

const ProceduresMain = () => {
  const isCancelled = useRef(false);
  const [procedures, setProcedures] = useState([]);
  const [selectedProcedure, setSelectedProcedure] = useState({});
  //console.log("ProceduresMain-useState-procedures: ", procedures);

  const fetchData = () => {
    //var userId = localStorage.getItem("userId");
    //var OrganizationId = localStorage.getItem("OrganizationId");

    getAllServerProcedures((procResponse) => {
      const { proceduresList = [] } = procResponse;
      console.log("ProceduresMain-Procedures From Server :", procResponse);
      setProcedures(proceduresList);

      // let updatedProcedure = proceduresList[0];      
      // updatedProcedure.name = "Best of Igal6 !!";
      // console.log("updatedProcedure: ", updatedProcedure);

      // const encoded = struct.encode(updatedProcedure);
      // console.log('encoded: ', encoded);

      // updateProcedure(encoded);
    });
  };

  const handleSelectedProcedure = (id) => {
    console.log("SelectedProcedure-ProcedureId: ", id);
    localStorage.setItem("procedureId", id);

    const selectedProc = procedures.find((obj) => obj.procedureid === id);
    setSelectedProcedure(selectedProc);
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
