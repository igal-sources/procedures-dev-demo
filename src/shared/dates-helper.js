import moment from "moment";

export const fromProtoToDate = (seconds, nanos) => {
  if (window.proto) {
    const proto = window.proto;
    const timestamp = new proto.google.protobuf.Timestamp();
    //const timeMS = Date.now();
    // timestamp.setSeconds(seconds / 1000);
    // timestamp.setNanos((nanos % 1000) * 1e6);
    timestamp.setSeconds(seconds);
    timestamp.setNanos(nanos);

    var date = new Date(timestamp.toDate());

    const finalDate = moment(date).format("YYYY-MM-DD");
    return finalDate;
  }
};

export const toDateFromProto = (date) => {
  if (window.proto) {
    const proto = window.proto;

    // Create timestamp
    const timestamp = new proto.google.protobuf.Timestamp();
    timestamp.setSeconds(date / 1000);
    timestamp.setNanos((date % 1000) * 1e6);
  }
};
