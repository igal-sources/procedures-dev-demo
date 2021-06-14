import moment from "moment";
import * as timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export const fromProtoToDate = (seconds, nanos) => {
  if (window.proto) {
    const proto = window.proto;
    const timestamp = new proto.google.protobuf.Timestamp();

    timestamp.setSeconds(seconds);
    timestamp.setNanos(nanos);

    var date = new Date(timestamp.toDate());

    //const finalDate = moment(date).format("YYYY-MM-DD");
    const finalDate = moment(date).format("YYYY-MM-DDTHH:mm");
    return finalDate;
  }
};

export const fromProtoToMilliseconds = (seconds, nanos) => {
  if (window.proto) {
    const proto = window.proto;
    const timestamp = new proto.google.protobuf.Timestamp();
    timestamp.setSeconds(seconds);
    timestamp.setNanos(nanos);

    var startDate = new Date();
    var endDate = new Date(timestamp.toDate());

    return endDate.getTime() - startDate.getTime();
  }
};

export const toProtoTimestamp = (fieldValue) => {
  const timestamp = new timestamp_pb.Timestamp();
  timestamp.setSeconds(fieldValue.seconds);
  timestamp.setNanos(fieldValue.nanos);
  return timestamp;
};

export const toProtoFromDate = (date) => {
  //console.log("date: ", date);
  if (window.proto) {
    const proto = window.proto;

    // Create timestamp
    //const timeMS = Date.now();
    let newDate = new Date(date.toString());
    var milliseconds = newDate.getTime();

    const timestamp = new proto.google.protobuf.Timestamp();
    timestamp.setSeconds(milliseconds / 1000);
    timestamp.setNanos((milliseconds % 1000) * 1e6);

    return timestamp;
  }
};

// function prepareDate(d) {
//   [d, m, y] = d.split("-"); //Split the string
//   return [y, m - 1, d]; //Return as an array with y,m,d sequence
// }
