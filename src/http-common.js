import axios from "axios";
import { ProcedureServiceClient } from "../src/proto/procedures_grpc_web_pb";
import { GetProceduresRequest } from "../src/proto/procedures_pb";

const enableDevTools = window._GRPCWEB_DEVTOOLS_ || (() => {});
var client = new ProcedureServiceClient("http://192.168.35.135:56942");

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
