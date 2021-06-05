import { getAllServerProcedures } from "../../services/procedures-http.service";
import { toProtoTimestamp } from "../../shared/dates-helper";

export const procedureMapToProto = (procedure, callback) => {
  const selectedIndex = localStorage.getItem("selectedIndexServerProcedure");
  console.log("selectedIndex: ", selectedIndex);

  getAllServerProcedures((procResponse) => {
    var res = procResponse.getProceduresList();
    var procToUpdate = res[selectedIndex];

    Object.entries(procedure).map(([fieldName, fieldValue]) => {
      console.log("fieldName: ", fieldName);
      console.log("fieldValue: ", fieldValue);
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
        case "stepsList":
          Object.entries(fieldValue).map(([keyName, keyValue]) => {
            const { instruction, sequencenumber, title, possibleresultsList } = fieldValue;
            switch (keyName) {
              case "instruction":
                procToUpdate.setInstruction(keyValue);
                break;
              case "sequencenumber":
                procToUpdate.setSequencenumber(keyValue);
                break;
              case "title":
                procToUpdate.setTitle(keyValue);
                break;
            }

            Object.entries(possibleresultsList).map(([keyName, keyValue]) => {
              switch (keyName) {
                case "name":
                  procToUpdate.getStepsList().setName(keyValue);
                  break;
                case "sequencenumber":
                  procToUpdate.getStepsList().setSequencenumber(keyValue);
                  break;
              }
            });
          });
          break;
        case "condition":
          const { eventtypeid, eventsubtypeid, severity, priority, endat, schedule } = fieldValue;
          procToUpdate.getCondition().setEventtypeid(eventtypeid);
          procToUpdate.getCondition().setEventsubtypeid(eventsubtypeid);
          procToUpdate.getCondition().setSeverity(severity);
          procToUpdate.getCondition().setPriority(priority);
          procToUpdate.getCondition().setEndat(toProtoTimestamp(endat));
          //procToUpdate.setSchedule(schedule);
          break;
        default:
          break;
      }
    });

    console.log("procToUpdate: ", procToUpdate);
    callback(procToUpdate);
  });
};
