import { AuthServiceClient, LoginRequest, RefreshRequest } from "../proto/auth_grpc_web_pb";
import { fromProtoToMilliseconds } from "../shared/dates-helper";

export const populateAccessToken = () => {
  var authClient = new AuthServiceClient("http://192.168.35.135:9999");

  var loginRequest = new LoginRequest();
  loginRequest.setUsername("me");
  loginRequest.setPassword("meme");
  loginRequest.setHostname("pchost");
  loginRequest.setSelectedorganizationid("D1FC2B68-4949-4430-9301-3A4E76896C6F");
  authClient.login(loginRequest, null, function (err, response) {
    if (err) {
      console.log("AccessToken-error code: ", err.code);
      console.log("AccessToken-error message: ", err.message);
    } else {
      var cred = response.toObject();
      console.log("loginRequest-response: ", cred);

      var metadata = { authorization: "bearer " + cred.accesstoken };
      localStorage.setItem("accessTokenMetadata", JSON.stringify(metadata));
      localStorage.setItem("refreshToken", cred.refreshtoken);

      const { accesstokenexp: { nanos = "", seconds = "" } = {} } = cred;
      const expMilliseconds = fromProtoToMilliseconds(seconds, nanos);
      console.log("expMilliseconds: ", expMilliseconds);

      const interval = setInterval(() => {
        populateRefreshToken();
      }, expMilliseconds);
    }
  });
};

export const populateRefreshToken = () => {
  var authClient = new AuthServiceClient("http://192.168.35.135:9999");

  var refreshRequest = new RefreshRequest();
  refreshRequest.setRefreshtoken(localStorage.getItem("refreshToken"));

  authClient.refresh(refreshRequest, null, function (err, response) {
    if (err) {
      console.log("RefreshToken-error code: ", err.code);
      console.log("RefreshToken-error message: ", err.message);
    } else {
      var cred = response.toObject();
      console.log("refreshRequest-response: ", cred);

      var metadata = { authorization: "bearer " + cred.accesstoken };
      localStorage.setItem("accessTokenMetadata", JSON.stringify(metadata));
      localStorage.setItem("refreshToken", cred.refreshtoken);
    }
  });
};
