import axios from "axios";
import { ProcedureServiceClient } from "../src/proto/procedures_grpc_web_pb";
import {
  GetProceduresRequest,
  CreateProcedureRequest,
  UpdateProcedureRequest,
  DeleteProcedureRequest,
} from "../src/proto/procedures_pb";
import {
  createProcedureMapToProto,
  procedureMapToProto,
} from "../src/services/adapters/proceduresAdapter";

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
var client = new ProcedureServiceClient("http://192.168.35.135:9999");
// var client = new ProcedureServiceClient("http://192.168.35.135:54745");

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
  // pingRequest.setSkip(0);
  pingRequest.setTake(15);

  await client.getProcedures(pingRequest, null, (err, response) => {
    //console.log("err, response: ", err, response);

    if (err !== null) {
      console.log("getProcedures error code:", err.code);
      console.log("getProcedures error message:", err.message);
      return;
    }

    const result = response; //.toObject();
    //console.log("response: ", result);

    callback(result);
  });
};

export const createServerProcedure = async (data) => {
  console.log("Create new Server Procedure");

  var pingRequest = new CreateProcedureRequest();

  procedureMapToProto(data, (res) => {
    console.log("protoProcedure: ", res);
    pingRequest.setProcedure(res);

    client.createProcedure(pingRequest, null, (err, response) => {
      if (err !== null) {
        console.log("createProcedure: err.code", err.code);
        console.log("createProcedure: err.message", err.message);
        return;
      }

      //const result = response.toObject();
      //console.log("response: ", result);
    });
  });
};

export const updateServerProcedure = (data) => {
  console.log("Update existing Server Procedure: ", data);

  var pingRequest = new UpdateProcedureRequest();

  procedureMapToProto(data, (res) => {
    console.log("protoProcedure: ", res);
    pingRequest.setProcedure(res);

    client.updateProcedure(pingRequest, null, (err, response) => {
      if (err !== null) {
        console.log("updateProcedure: err.code", err.code);
        console.log("updateProcedure: err.message", err.message);
        return;
      }
    });
  });
};

export const deleteServerProcedure = (procId) => {
  console.log("Delete existing Server ProcedureId: ", procId);

  var pingRequest = new DeleteProcedureRequest();
  pingRequest.setProcedureid(procId);

  client.deleteProcedure(pingRequest, null, (err, response) => {
    console.log("err, response: ", err, response);

    if (err !== null) {
      console.log("err: ", err);
      return;
    }
  });
};
