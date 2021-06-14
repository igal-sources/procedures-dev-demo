/**
 * @fileoverview gRPC-Web generated client stub for auth_v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.auth_v1 = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.auth_v1.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.auth_v1.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth_v1.OrganizationAssociationRequest,
 *   !proto.auth_v1.OrganizationAssociationResponse>}
 */
const methodDescriptor_AuthService_GetOrganizationAssociation = new grpc.web.MethodDescriptor(
  '/auth_v1.AuthService/GetOrganizationAssociation',
  grpc.web.MethodType.UNARY,
  proto.auth_v1.OrganizationAssociationRequest,
  proto.auth_v1.OrganizationAssociationResponse,
  /**
   * @param {!proto.auth_v1.OrganizationAssociationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth_v1.OrganizationAssociationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth_v1.OrganizationAssociationRequest,
 *   !proto.auth_v1.OrganizationAssociationResponse>}
 */
const methodInfo_AuthService_GetOrganizationAssociation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth_v1.OrganizationAssociationResponse,
  /**
   * @param {!proto.auth_v1.OrganizationAssociationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth_v1.OrganizationAssociationResponse.deserializeBinary
);


/**
 * @param {!proto.auth_v1.OrganizationAssociationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth_v1.OrganizationAssociationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth_v1.OrganizationAssociationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth_v1.AuthServiceClient.prototype.getOrganizationAssociation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth_v1.AuthService/GetOrganizationAssociation',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetOrganizationAssociation,
      callback);
};


/**
 * @param {!proto.auth_v1.OrganizationAssociationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth_v1.OrganizationAssociationResponse>}
 *     Promise that resolves to the response
 */
proto.auth_v1.AuthServicePromiseClient.prototype.getOrganizationAssociation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth_v1.AuthService/GetOrganizationAssociation',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetOrganizationAssociation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth_v1.LoginRequest,
 *   !proto.auth_v1.LoginResponse>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/auth_v1.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.auth_v1.LoginRequest,
  proto.auth_v1.LoginResponse,
  /**
   * @param {!proto.auth_v1.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth_v1.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth_v1.LoginRequest,
 *   !proto.auth_v1.LoginResponse>}
 */
const methodInfo_AuthService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth_v1.LoginResponse,
  /**
   * @param {!proto.auth_v1.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth_v1.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.auth_v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth_v1.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth_v1.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth_v1.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth_v1.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.auth_v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth_v1.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.auth_v1.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth_v1.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth_v1.RefreshRequest,
 *   !proto.auth_v1.LoginResponse>}
 */
const methodDescriptor_AuthService_Refresh = new grpc.web.MethodDescriptor(
  '/auth_v1.AuthService/Refresh',
  grpc.web.MethodType.UNARY,
  proto.auth_v1.RefreshRequest,
  proto.auth_v1.LoginResponse,
  /**
   * @param {!proto.auth_v1.RefreshRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth_v1.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth_v1.RefreshRequest,
 *   !proto.auth_v1.LoginResponse>}
 */
const methodInfo_AuthService_Refresh = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth_v1.LoginResponse,
  /**
   * @param {!proto.auth_v1.RefreshRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth_v1.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.auth_v1.RefreshRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth_v1.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth_v1.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth_v1.AuthServiceClient.prototype.refresh =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth_v1.AuthService/Refresh',
      request,
      metadata || {},
      methodDescriptor_AuthService_Refresh,
      callback);
};


/**
 * @param {!proto.auth_v1.RefreshRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth_v1.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.auth_v1.AuthServicePromiseClient.prototype.refresh =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth_v1.AuthService/Refresh',
      request,
      metadata || {},
      methodDescriptor_AuthService_Refresh);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth_v1.LogoutRequest,
 *   !proto.auth_v1.LogoutResponse>}
 */
const methodDescriptor_AuthService_Logout = new grpc.web.MethodDescriptor(
  '/auth_v1.AuthService/Logout',
  grpc.web.MethodType.UNARY,
  proto.auth_v1.LogoutRequest,
  proto.auth_v1.LogoutResponse,
  /**
   * @param {!proto.auth_v1.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth_v1.LogoutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth_v1.LogoutRequest,
 *   !proto.auth_v1.LogoutResponse>}
 */
const methodInfo_AuthService_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth_v1.LogoutResponse,
  /**
   * @param {!proto.auth_v1.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth_v1.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.auth_v1.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth_v1.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth_v1.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth_v1.AuthServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth_v1.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout,
      callback);
};


/**
 * @param {!proto.auth_v1.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth_v1.LogoutResponse>}
 *     Promise that resolves to the response
 */
proto.auth_v1.AuthServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth_v1.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout);
};


module.exports = proto.auth_v1;

