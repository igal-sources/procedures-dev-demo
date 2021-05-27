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
    getAllServerProcedures((procResponse) => {
      const { proceduresList = [] } = procResponse;
      console.log("ProceduresMain-Procedures From Server :", proceduresList);
      setProcedures(proceduresList);
    });

    var dt = getDate();
    var date = new Date(dt.toDate());
    console.log("dt: ", moment(date).format("HH:mm YYYY-DD-MM"));
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
    console.log("ProcedureId: ", id);
    localStorage.setItem("procedureId", id);

    const selectedProc = procedures.find((obj) => obj.procedureid === id);
    setSelectedProcedure(selectedProc);
    localStorage.setItem("selectedProcedure", JSON.stringify(selectedProc));
    console.log("selectedProc: ", selectedProc);

    // getProcedure(id).then((res) => {
    //   setSelectedProcedure(res.data);
    //   localStorage.setItem("selectedProcedure", JSON.stringify(res.data));
    // });
  };

  useEffect(() => {
    !isCancelled.current && fetchData();

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
