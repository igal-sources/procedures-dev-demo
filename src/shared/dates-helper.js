import moment from "moment";

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

export const toProtoFromDate = (date) => {
  console.log("date: ", date);
  if (window.proto) {
    const proto = window.proto;

    console.log("after window.proto-date: ", date);
    // Create timestamp
    //const timeMS = Date.now();
    let newDate = new Date(date.toString());
    var milliseconds = newDate.getTime();
    console.log("milliseconds: ", milliseconds);

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
