export let listArray = [
  {
    id: "4b3e6b47-0d8c-4897-81d2-b4c58f5e9d45",
    Name: "Listed in LPR(3) Caution",
    Description: "Listed in LPR Listed in LPR Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2017-01-01T00:00:00",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 0,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 2,
      EventSubTypeID: 3,
      Severity: 2,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "4646464646",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E3)",
        Instruction: "verify event with cameras - if possible (E3)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E3)",
        Instruction: "inform local police (E3)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E3)",
        Instruction: "inform traffic police (E3)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E3)",
        Instruction: "prepare report (E3)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    Name: "Restrained area (7) Caution",
    Description: "Parade in the restricted area Parade in the restricted area Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2017-01-01T00:00:00",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: false,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 0,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 2,
      EventSubTypeID: 7,
      Severity: 1,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "NULL",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E7)",
        Instruction: "verify event with cameras - if possible (E7)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E7)",
        Instruction: "inform local police (E7)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E7)",
        Instruction: "inform traffic police (E7)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E7)",
        Instruction: "prepare report (E7)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    Name: "Moving dose in restricted area (10) Caution",
    Description: "Moving dose in restricted area Moving dose in restricted area Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2017-01-01T00:00:00",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 0,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 2,
      EventSubTypeID: 10,
      Severity: 3,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "NULL",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E10)",
        Instruction: "verify event with cameras - if possible (E10)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E10)",
        Instruction: "inform local police (E10)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E10)",
        Instruction: "inform traffic police (E10)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E10)",
        Instruction: "prepare report (E10)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    Name: "Create Vehicle Detection (143) Caution",
    Description: "Create Vehicle Detection Creation Precision Vehicle Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2017-01-01T00:00:00",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 0,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 2,
      EventSubTypeID: 143,
      Severity: 1,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "NULL",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E143)",
        Instruction: "verify event with cameras - if possible (E143)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E143)",
        Instruction: "inform local police (E143)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E143)",
        Instruction: "inform traffic police (E143)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E143)",
        Instruction: "prepare report (E143)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    Name: "Threshold of Account (15) Caution",
    Description: "Threshold of Account Umbral of Account Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2021-05-08T16:26:34.212Z",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 1,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 13,
      EventSubTypeID: 15,
      Severity: 1,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "NULL",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E15)",
        Instruction: "verify event with cameras - if possible (E15)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E15)",
        Instruction: "inform local police (E15)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E15)",
        Instruction: "inform traffic police (E15)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E15)",
        Instruction: "prepare report (E15)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 5,
        Title: "SQ222",
        Instruction: "WQ222",
        ProcedureStepResults: [
          {
            SequenceNumber: "1",
            Name: "111",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    Name: "Crossing a Restricted Line (19) Caution",
    Description: "Crossing a Restricted Line (19) Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2021-05-08T16:24:04.494Z",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 1,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 16,
      EventSubTypeID: 19,
      Severity: 3,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "NULL",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E19)",
        Instruction: "verify event with cameras - if possible (E19)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E19)",
        Instruction: "inform local police (E19)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E19)",
        Instruction: "inform traffic police (E19)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E19)",
        Instruction: "prepare report (E19)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 5,
        Title: "SDD99999",
        Instruction: "RWWW22255555",
        ProcedureStepResults: [
          {
            SequenceNumber: "1",
            Name: "11111",
          },
        ],
      },
      {
        SequenceNumber: 6,
        Title: "SAA555",
        Instruction: "R555",
        ProcedureStepResults: [
          {
            SequenceNumber: "1",
            Name: "55555",
          },
        ],
      },
      {
        SequenceNumber: 7,
        Title: "SA1222",
        Instruction: "RR444",
        ProcedureStepResults: [
          {
            SequenceNumber: "1",
            Name: "AAAAA",
          },
          {
            SequenceNumber: "2",
            Name: "BBBBB",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    Name: "Unattended baggage (28) Caution",
    Description: "Unattended baggage (28) Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2017-01-01T00:00:00",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 0,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 27,
      EventSubTypeID: 28,
      Severity: 2,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "NULL",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E28)",
        Instruction: "verify event with cameras - if possible (E28)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E28)",
        Instruction: "inform local police (E28)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E28)",
        Instruction: "inform traffic police (E28)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E28)",
        Instruction: "prepare report (E28)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    Name: "Intentional Roadblock (34) Caution",
    Description: "Intentional Highway Blocking Intentional Highway Blocking Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2017-01-01T00:00:00",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 0,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 31,
      EventSubTypeID: 34,
      Severity: 2,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "NULL",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E34)",
        Instruction: "verify event with cameras - if possible (E34)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E34)",
        Instruction: "inform local police (E34)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E34)",
        Instruction: "inform traffic police (E34)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E34)",
        Instruction: "prepare report (E34)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    Name: "Unauthorized entry (128) Caution",
    Description: "Unauthorized entry Unauthorized entry Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2017-01-01T00:00:00",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 0,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 31,
      EventSubTypeID: 128,
      Severity: 2,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "NULL",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E128)",
        Instruction: "verify event with cameras - if possible (E128)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E128)",
        Instruction: "inform local police (E128)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E128)",
        Instruction: "inform traffic police (E128)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E128)",
        Instruction: "prepare report (E128)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    Name: "Appointment (1087) Caution",
    Description: "Appointment (1087) Caution",
    CreationDate: "2017-01-01T00:00:00",
    ModifyDate: "2017-01-01T00:00:00",
    ValidityDate: "2017-01-01T00:00:00",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 0,
    OrganizationId: -1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 1085,
      EventSubTypeID: 1087,
      Severity: 2,
      Priority: "NULL",
      StartAt: "00:00:00.0000000",
      EndAt: "23:59:59.0000000",
      GeoAreaID: "NULL",
      ScheduleID: "NULL",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "verify event with cameras - if possible (E1087)",
        Instruction: "verify event with cameras - if possible (E1087)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 2,
        Title: "inform local police (E1087)",
        Instruction: "inform local police (E1087)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 3,
        Title: "inform traffic police (E1087)",
        Instruction: "inform traffic police (E1087)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
      {
        SequenceNumber: 4,
        Title: "prepare report (E1087)",
        Instruction: "prepare report (E1087)",
        ProcedureStepResults: [
          {
            SequenceNumber: 1,
            Name: "Done",
          },
          {
            SequenceNumber: 2,
            Name: "Not done",
          },
        ],
      },
    ],
  },
  {
    id: "a7db25ae-512f-4763-9336-b03f93306be7",
    Name: "Proc 1",
    Description: "1111",
    CreationDate: "2021-05-06T10:55:32.233Z",
    ModifyDate: "2021-05-06T11:04:30.602Z",
    ValidityDate: "2021-05-06T10:55:32.233Z",
    IsActive: true,
    IsDeleted: false,
    CreatingUserId: 1,
    ModifyUserId: 1,
    OrganizationId: 1,
    IsLocked: false,
    ProcedureCondition: {
      EventTypeID: 70,
      Severity: 3,
      Priority: "NULL",
      StartAt: "",
      EndAt: "",
      GeoAreaID: "NULL11",
      ScheduleID: -1,
      EventSubTypeID: 73,
      Recurring: "11",
    },
    ProcedureSteps: [
      {
        SequenceNumber: 1,
        Title: "S11",
        Instruction: "I11",
        ProcedureStepResults: [
          {
            SequenceNumber: "1",
            Name: "2222",
          },
          {
            SequenceNumber: "2",
            Name: "aaaa",
          },
        ],
      },
    ],
  },
];