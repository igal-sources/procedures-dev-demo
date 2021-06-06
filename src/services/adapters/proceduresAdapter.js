//import { getAllServerProcedures } from "../../services/procedures-http.service";
import {
  ProcedureTemplate,
  ProcedureCondition,
  ProcedureStep,
  ProcedureStepResult,
} from "../../proto/procedures_pb";
import { toProtoTimestamp } from "../../shared/dates-helper";

export const procedureMapToProto = (procedure, callback) => {
  var procToUpdate = new ProcedureTemplate();
  procToUpdate.setProcedureid(procedure.procedureid);

  Object.entries(procedure).map(([fieldName, fieldValue]) => {
    // console.log("fieldName: ", fieldName);
    // console.log("fieldValue: ", fieldValue);
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
      case "condition":
        const { eventtypeid, eventsubtypeid, severity, priority, endat, schedule } = fieldValue;
        var conditionObj = new ProcedureCondition();
        conditionObj.setEventtypeid(eventtypeid);
        conditionObj.setEventsubtypeid(eventsubtypeid);
        conditionObj.setSeverity(severity);
        conditionObj.setPriority(priority);
        conditionObj.setEndat(toProtoTimestamp(endat));
        procToUpdate.setCondition(conditionObj);

        break;
      case "stepsList":
        var stepsListObj = null;
        var stepResultObj = null;
        var stepsArray = [];
        var possibleResultsArray = [];

        fieldValue.forEach((element) => {
          console.log("element: ", element);
          const { sequencenumber, instruction, title, possibleresultsList } = element;

          stepsListObj = new ProcedureStep();
          stepsListObj.setSequencenumber(sequencenumber);
          stepsListObj.setInstruction(instruction);
          stepsListObj.setTitle(title);
          stepsArray.push(stepsListObj);

          possibleresultsList.forEach((result) => {
            const { sequencenumber, name } = result;
            stepResultObj = new ProcedureStepResult();
            stepResultObj.setSequencenumber(sequencenumber);
            stepResultObj.setName(name);
            possibleResultsArray.push(stepResultObj);
          });

          stepsListObj.setPossibleresultsList(possibleResultsArray);
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
