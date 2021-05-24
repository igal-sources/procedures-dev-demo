import axios from "axios";
import { ProcedureServiceClient } from "../src/proto/procedures_grpc_web_pb";
import { GetProceduresRequest } from "../src/proto/procedures_pb";

const enableDevTools = window._GRPCWEB_DEVTOOLS_ || (() => {});
var client = new ProcedureServiceClient("http://192.168.35.135:57715");

enableDevTools([client]);

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
  },
});

export const getProcedures = () => {
  console.log("getProcedures from server");

  var pingRequest = new GetProceduresRequest();

  const headers = {
    "Content-type": "application/json",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  client.getProcedures(pingRequest, null, function (err, response) {
    console.log("err, response: ", err, response);
    if (err !== null) {
      console.log("err: ", err);
      return;
    }

    const result = response.toObject().Procedures;
    console.log("response: ", result);
  });
};
