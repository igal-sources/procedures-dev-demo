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

export const initializeProcedure = {
  id: "",
  Name: "",
  Description: "",
  CreationDate: "",
  ModifyDate: "",
  ValidityDate: "",
  IsActive: true,
  IsDeleted: false,
  CreatingUserId: "",
  ModifyUserId: "",
  OrganizationId: "",
  IsLocked: false,
  ProcedureCondition: {
    EventTypeID: -1,
    Severity: -1,
    Priority: "NULL",
    StartAt: "",
    EndAt: "",
    GeoAreaID: "NULL",
    ScheduleID: -1,
  },
  ProcedureSteps: [],
};

export const initializeProcedureStep = {
  SequenceNumber: "",
  Title: "",
  Instruction: "",
  ProcedureStepResults: [],
};
