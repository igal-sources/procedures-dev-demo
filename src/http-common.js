import axios from "axios";
import { ProcedureServiceClient } from "../src/proto/procedures_grpc_web_pb";
import {
  GetProceduresRequest,
  CreateProcedureRequest,
  UpdateProcedureRequest,
  DeleteProcedureRequest,
} from "../src/proto/procedures_pb";

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
var client = new ProcedureServiceClient("http://192.168.35.135:9999");

enableDevTools([client]);

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
  },
});

export const getServerProcedures = async (id, callback) => {
  console.log("Get Procedures from server");

  var pingRequest = new GetProceduresRequest();
  pingRequest.setSkip(0);
  pingRequest.setTake(15);

  if (id !== null) {
    pingRequest.setFilterbyidsList = [id];
  }

  await client.getProcedures(pingRequest, null, (err, response) => {
    //console.log("err, response: ", err, response);

    if (err !== null) {
      console.log("err: ", err);
      return;
    }

    const result = response.toObject();
    //console.log("response: ", result);
    callback(result);
  });
};

export const createServerProcedure = async (data) => {
  console.log("Create new Server Procedure");

  var pingRequest = new CreateProcedureRequest();
  pingRequest.setProcedureTemplate = data;

  await client.createProcedure(pingRequest, null, (err, response) => {
    //console.log("err, response: ", err, response);

    if (err !== null) {
      console.log("err: ", err);
      return;
    }

    const result = response.toObject();
    console.log("response: ", result);
  });
};

export const updateServerProcedure = (data) => {
  console.log("Update existing Server Procedure");

  var pingRequest = new UpdateProcedureRequest();
  pingRequest.setProcedureTemplate = data;

  client.updateProcedure(pingRequest, null, (err, response) => {
    //console.log("err, response: ", err, response);

    if (err !== null) {
      console.log("err: ", err);
      return;
    }

    const result = response.toObject(); //.getProceduresList();
    console.log("response: ", result);
  });
};

export const deleteServerProcedure = (procId) => {
  console.log("Update existing Server Procedure");

  var pingRequest = new DeleteProcedureRequest();
  pingRequest.setProcedureId(procId);

  client.deleteProcedure(pingRequest, null, (err, response) => {
    //console.log("err, response: ", err, response);

    if (err !== null) {
      console.log("err: ", err);
      return;
    }

    const result = response.toObject(); //.getProceduresList();
    console.log("response: ", result);
  });
};
