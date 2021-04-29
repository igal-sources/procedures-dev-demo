export const EmptyFn = () => {};

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
