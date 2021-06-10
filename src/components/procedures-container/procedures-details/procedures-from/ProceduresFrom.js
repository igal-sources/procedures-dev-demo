import React, { useState, useEffect, useRef } from "react";
import Form, { GroupItem, SimpleItem, Label, RequiredRule } from "devextreme-react/form";
import { fromProtoToDate } from "../../../../shared/dates-helper";
import "devextreme-react/text-area";
import "./procedures-from.scss";

const ProceduresFrom = ({ procedure = {}, isReadOnly }) => {
  //console.log("ProceduresFrom-procedure: ", procedure);
  const isCancelled = useRef(false);
  const [creationDate, setCreationDate] = useState();
  const [modifyDate, setModifyDate] = useState();
  //console.log("ProceduresFrom: ", procedure);

  const initData = () => {
    if (Object.keys(procedure).length === 0) {
      return;
    }

    populateCreationDate();
    populateModifyDate();
  };

  const populateCreationDate = () => {
    const { creationdate: { nanos = "", seconds = "" } = {} } = procedure;
    const finalDate = fromProtoToDate(seconds, nanos);
    setCreationDate(finalDate);
  };

  const populateModifyDate = () => {
    const { modifydate: { nanos = "", seconds = "" } = {} } = procedure;
    const finalDate = fromProtoToDate(seconds, nanos);
    setModifyDate(finalDate);
  };

  const validationRules = {
    name: [{ type: "required", message: "Name is required." }],
    description: [{ type: "required", message: "Description is required." }],
  };

  const validateForm = (e) => {
    e.component.validate();
  };

  useEffect(() => {
    // !isCancelled.current && initData();
    initData();

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedure.procedureid]);

  return (
    <div className="ProceduresFrom-container">
      <Form
        id="From"
        className="ProceduresFrom-Form"
        formData={procedure}
        readOnly={isReadOnly}
        // onContentReady={validateForm}
        showValidationSummary={true}
        showColonAfterLabel={true}
        labelLocation={"left"}
        minColWidth={500}
        colCount={2}
        width={750}
      >
        <GroupItem caption="From">
          <SimpleItem dataField="name" validationRules={validationRules.name} />
          <SimpleItem
            dataField="creatinguserid"
            editorOptions={{
              readOnly: true,
            }}
          >
            <Label visible={true} text={"Created By"} />
          </SimpleItem>
          <SimpleItem
            //dataField="creationdate"
            editorType="dxDateBox"
            editorOptions={{
              readOnly: true,
              displayFormat: "dd/MM/yyyy HH:mm",
              // type: "date",
              value: creationDate,
            }}
          >
            <Label
              visible={true}
              text={"Creation Date"}
              editorOptions={{
                readOnly: true,
              }}
            />
          </SimpleItem>
          <SimpleItem
            dataField="modifyuserid"
            editorOptions={{
              readOnly: true,
            }}
          >
            <Label visible={true} text={"Last Modification User"} />
          </SimpleItem>
          <SimpleItem
            //dataField="modifydate"
            editorType="dxDateBox"
            editorOptions={{
              readOnly: true,
              displayFormat: "dd/MM/yyyy HH:mm",
              value: modifyDate,
            }}
          >
            <Label visible={true} text={"Last Modification Date"} />
          </SimpleItem>
          <SimpleItem dataField="isactive" editorType="dxCheckBox">
            <Label visible={true} text={"Is Active"} />
          </SimpleItem>
          <SimpleItem dataField="description" editorType="dxTextArea"></SimpleItem>
        </GroupItem>
      </Form>
    </div>
  );
};

export default ProceduresFrom;
