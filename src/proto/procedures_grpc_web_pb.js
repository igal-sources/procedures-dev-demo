/**
 * @fileoverview gRPC-Web generated client stub for v1
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
proto.v1 = require('./procedures_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.ProcedureServiceClient =
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
proto.v1.ProcedureServicePromiseClient =
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
 *   !proto.v1.GetProceduresRequest,
 *   !proto.v1.GetProceduresResponse>}
 */
const methodDescriptor_ProcedureService_GetProcedures = new grpc.web.MethodDescriptor(
  '/v1.ProcedureService/GetProcedures',
  grpc.web.MethodType.UNARY,
  proto.v1.GetProceduresRequest,
  proto.v1.GetProceduresResponse,
  /**
   * @param {!proto.v1.GetProceduresRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.GetProceduresResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.GetProceduresRequest,
 *   !proto.v1.GetProceduresResponse>}
 */
const methodInfo_ProcedureService_GetProcedures = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.GetProceduresResponse,
  /**
   * @param {!proto.v1.GetProceduresRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.GetProceduresResponse.deserializeBinary
);


/**
 * @param {!proto.v1.GetProceduresRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.v1.GetProceduresResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.GetProceduresResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.ProcedureServiceClient.prototype.getProcedures =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.ProcedureService/GetProcedures',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_GetProcedures,
      callback);
};


/**
 * @param {!proto.v1.GetProceduresRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.GetProceduresResponse>}
 *     Promise that resolves to the response
 */
proto.v1.ProcedureServicePromiseClient.prototype.getProcedures =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.ProcedureService/GetProcedures',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_GetProcedures);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.CreateProcedureRequest,
 *   !proto.v1.CreateProcedureResponse>}
 */
const methodDescriptor_ProcedureService_CreateProcedure = new grpc.web.MethodDescriptor(
  '/v1.ProcedureService/CreateProcedure',
  grpc.web.MethodType.UNARY,
  proto.v1.CreateProcedureRequest,
  proto.v1.CreateProcedureResponse,
  /**
   * @param {!proto.v1.CreateProcedureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.CreateProcedureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.CreateProcedureRequest,
 *   !proto.v1.CreateProcedureResponse>}
 */
const methodInfo_ProcedureService_CreateProcedure = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.CreateProcedureResponse,
  /**
   * @param {!proto.v1.CreateProcedureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.CreateProcedureResponse.deserializeBinary
);


/**
 * @param {!proto.v1.CreateProcedureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.v1.CreateProcedureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.CreateProcedureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.ProcedureServiceClient.prototype.createProcedure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.ProcedureService/CreateProcedure',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_CreateProcedure,
      callback);
};


/**
 * @param {!proto.v1.CreateProcedureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.CreateProcedureResponse>}
 *     Promise that resolves to the response
 */
proto.v1.ProcedureServicePromiseClient.prototype.createProcedure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.ProcedureService/CreateProcedure',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_CreateProcedure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.UpdateProcedureRequest,
 *   !proto.v1.UpdateProcedureResponse>}
 */
const methodDescriptor_ProcedureService_UpdateProcedure = new grpc.web.MethodDescriptor(
  '/v1.ProcedureService/UpdateProcedure',
  grpc.web.MethodType.UNARY,
  proto.v1.UpdateProcedureRequest,
  proto.v1.UpdateProcedureResponse,
  /**
   * @param {!proto.v1.UpdateProcedureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.UpdateProcedureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.UpdateProcedureRequest,
 *   !proto.v1.UpdateProcedureResponse>}
 */
const methodInfo_ProcedureService_UpdateProcedure = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.UpdateProcedureResponse,
  /**
   * @param {!proto.v1.UpdateProcedureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.UpdateProcedureResponse.deserializeBinary
);


/**
 * @param {!proto.v1.UpdateProcedureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.v1.UpdateProcedureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.UpdateProcedureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.ProcedureServiceClient.prototype.updateProcedure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.ProcedureService/UpdateProcedure',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_UpdateProcedure,
      callback);
};


/**
 * @param {!proto.v1.UpdateProcedureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.UpdateProcedureResponse>}
 *     Promise that resolves to the response
 */
proto.v1.ProcedureServicePromiseClient.prototype.updateProcedure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.ProcedureService/UpdateProcedure',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_UpdateProcedure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.DeleteProcedureRequest,
 *   !proto.v1.DeleteProcedureResponse>}
 */
const methodDescriptor_ProcedureService_DeleteProcedure = new grpc.web.MethodDescriptor(
  '/v1.ProcedureService/DeleteProcedure',
  grpc.web.MethodType.UNARY,
  proto.v1.DeleteProcedureRequest,
  proto.v1.DeleteProcedureResponse,
  /**
   * @param {!proto.v1.DeleteProcedureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.DeleteProcedureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.DeleteProcedureRequest,
 *   !proto.v1.DeleteProcedureResponse>}
 */
const methodInfo_ProcedureService_DeleteProcedure = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.DeleteProcedureResponse,
  /**
   * @param {!proto.v1.DeleteProcedureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.DeleteProcedureResponse.deserializeBinary
);


/**
 * @param {!proto.v1.DeleteProcedureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.v1.DeleteProcedureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.DeleteProcedureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.ProcedureServiceClient.prototype.deleteProcedure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.ProcedureService/DeleteProcedure',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_DeleteProcedure,
      callback);
};


/**
 * @param {!proto.v1.DeleteProcedureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.DeleteProcedureResponse>}
 *     Promise that resolves to the response
 */
proto.v1.ProcedureServicePromiseClient.prototype.deleteProcedure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.ProcedureService/DeleteProcedure',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_DeleteProcedure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.LockProcedureRequest,
 *   !proto.v1.LockProcedureResponse>}
 */
const methodDescriptor_ProcedureService_LockProcedure = new grpc.web.MethodDescriptor(
  '/v1.ProcedureService/LockProcedure',
  grpc.web.MethodType.UNARY,
  proto.v1.LockProcedureRequest,
  proto.v1.LockProcedureResponse,
  /**
   * @param {!proto.v1.LockProcedureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.LockProcedureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.LockProcedureRequest,
 *   !proto.v1.LockProcedureResponse>}
 */
const methodInfo_ProcedureService_LockProcedure = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.LockProcedureResponse,
  /**
   * @param {!proto.v1.LockProcedureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.LockProcedureResponse.deserializeBinary
);


/**
 * @param {!proto.v1.LockProcedureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.v1.LockProcedureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.LockProcedureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.ProcedureServiceClient.prototype.lockProcedure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.ProcedureService/LockProcedure',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_LockProcedure,
      callback);
};


/**
 * @param {!proto.v1.LockProcedureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.LockProcedureResponse>}
 *     Promise that resolves to the response
 */
proto.v1.ProcedureServicePromiseClient.prototype.lockProcedure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.ProcedureService/LockProcedure',
      request,
      metadata || {},
      methodDescriptor_ProcedureService_LockProcedure);
};


module.exports = proto.v1;

