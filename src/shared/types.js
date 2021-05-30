export const EmptyFn = () => {};

export const LIST_PROCEDURES = "LIST_PROCEDURES";
export const GET_PROCEDURE = "GET_PROCEDURE";
export const ADD_PROCEDURE = "ADD_PROCEDURE";
export const UPDATE_PROCEDURE = "UPDATE_PROCEDURE";
export const DELETE_PROCEDURES = "DELETE_PROCEDURES";
export const DELETE_PROCEDURE = "DELETE_PROCEDURE";
export const CHECKED_PROCEDURE = "CHECKED_PROCEDURE";
export const ALL_CHECKED = "ALL_CHECKED";

export const actions = {
  ADD: 1,
  READ: 2,
  EDIT: 3,
  REMOVE: 4,
  ARROW_UP: 5,
  ARROW_DOWN: 6,
};

export const recurrencePatterns = ["Weekly", "Monthly", "Yearly"];

export const daysPattern = [
  {
    id: 0,
    day: "Sunday",
    active: false,
  },
  {
    id: 1,
    day: "Monday",
    active: false,
  },
  {
    id: 2,
    day: "Tuesday",
    active: false,
  },
  {
    id: 3,
    day: "Wednesday",
    active: false,
  },
  {
    id: 4,
    day: "Thursday",
    active: false,
  },
  {
    id: 5,
    day: "Friday",
    active: false,
  },
  {
    id: 6,
    day: "Saturday",
    active: false,
  },
];

export const initializeProcedure = {
  procedureid: "",
  name: "",
  description: "",
  creationdate: "",
  modifydate: "",
  validitydate: "",
  isactive: true,
  isdeleted: false,
  creatinguserid: "",
  modifyuserid: "",
  organizationid: "",
  IsLocked: false,
  condition: {
    eventtypeid: -1,
    eventsubtypeid: -1,
    severity: -1,
    priority: "NULL",
    startat: "",
    endat: "",
    geoarea: "NULL",
    schedule: {
      recurrencetype: 0,
      startdate: "",
      enddate: "",
      starttime: "",
      endtime: "",
      recurrencevalues: "",
      duration: "",
    },
  },
  stepsList: [],
};

export const initializeProcedureStep = {
  sequencenumber: "",
  title: "",
  instruction: "",
  possibleresultsList: [],
};

export const emptyRecurrence = {
  recurrencetype: 1,
  startdate: "",
  enddate: "",
  starttime: "",
  endtime: "",
  recurrencevalues: "0",
  duration: "",
};
