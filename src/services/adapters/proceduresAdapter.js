import {
  ProcedureTemplate,
  ProcedureCondition,
  ProcedureStep,
  ProcedureSchedule,
  ProcedureStepResult,
} from "../../proto/procedures_pb";
import { toProtoTimestamp } from "../../shared/dates-helper";

export const procedureMapToProto = (procedure, callback) => {
  var procToUpdate = new ProcedureTemplate();
  procToUpdate.setProcedureid(procedure.procedureid);

  mapToProto(procedure, procToUpdate, (result) => {
    callback(result);
  });
};

export const mapToProto = (procedure, procToUpdate, callback) => {
  Object.entries(procedure).map(([fieldName, fieldValue]) => {
    //console.log("fieldName, fieldValue: ", fieldName, fieldValue);
    switch (fieldName) {
      case "name":
        procToUpdate.setName(fieldValue);
        break;
      case "description":
        procToUpdate.setDescription(fieldValue);
        break;
      case "isactive":
        procToUpdate.setIsactive(fieldValue);
        break;
      case "creationdate":
        procToUpdate.setCreationdate(toProtoTimestamp(fieldValue));
        break;
      case "modifydate":
        procToUpdate.setModifydate(toProtoTimestamp(fieldValue));
        break;
      case "creatinguserid":
        console.log("creatinguserid: ", fieldValue);
        procToUpdate.setCreatinguserid(fieldValue);
        break;
      case "modifyuserid":
        console.log("modifyuserid: ", fieldValue);
        procToUpdate.setModifyuserid(fieldValue);
        break;
      case "condition":
        const { eventtypeid, eventsubtypeid, severity, priority, endat, schedule } = fieldValue;

        var conditionObj = new ProcedureCondition();
        conditionObj.setEventtypeid(eventtypeid);
        conditionObj.setEventsubtypeid(eventsubtypeid);
        conditionObj.setSeverity(severity);
        conditionObj.setPriority(priority);
        conditionObj.setEndat(toProtoTimestamp(endat));

        // var scheduleObj = new ProcedureSchedule();
        // scheduleObj.setDuration(schedule.duration);
        // scheduleObj.setEndat(toProtoTimestamp(schedule.endat));
        // scheduleObj.setRecurrencetype(schedule.recurrencetype);
        // scheduleObj.setRecurrencevalues(schedule.recurrencevalues);
        // scheduleObj.setStartat(toProtoTimestamp(schedule.startat));

        // conditionObj.setSchedule(scheduleObj);

        procToUpdate.setCondition(conditionObj);

        break;
      case "stepsList":
        var stepsListObj = null;
        var stepResultObj = null;
        var stepsArray = [];

        fieldValue.forEach((element) => {
          console.log("element: ", element);
          const { sequencenumber, instruction, title, possibleresultsList } = element;

          stepsListObj = new ProcedureStep();
          stepsListObj.setSequencenumber(sequencenumber);
          stepsListObj.setInstruction(instruction);
          stepsListObj.setTitle(title);

          var possibleResultsArray = [];
          possibleresultsList.forEach((result) => {
            const { sequencenumber, name } = result;
            stepResultObj = new ProcedureStepResult();
            stepResultObj.setSequencenumber(sequencenumber);
            stepResultObj.setName(name);
            possibleResultsArray.push(stepResultObj);
          });

          stepsListObj.setPossibleresultsList(possibleResultsArray);
          stepsArray.push(stepsListObj);
        });

        procToUpdate.setStepsList(stepsArray);
        break;

      default:
        break;
    }
  });

  console.log("procToUpdate: ", procToUpdate);
  callback(procToUpdate);
};
