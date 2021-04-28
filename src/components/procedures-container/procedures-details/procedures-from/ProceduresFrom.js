import React from "react";
import Form, { GroupItem, SimpleItem, Label, RequiredRule } from "devextreme-react/form";
import TextArea from 'devextreme-react/text-area';
import "./procedures-from.scss";

const ProceduresFrom = ({ procedure = {}, isReadOnly }) => {
  //console.log("ProceduresFrom: ", procedure);

  return (
    <div className="ProceduresFrom-container">

      <Form
        id="From"
        formData={procedure}
        readOnly={isReadOnly}
        showColonAfterLabel={true}
        labelLocation={"left"}
        minColWidth={500}
        colCount={2}
        width={750}
      >
        <GroupItem caption="From">
          <SimpleItem dataField="Name">
            <RequiredRule message="Name is required" />
          </SimpleItem>
          <SimpleItem dataField="CreatingUserId">
            <Label visible={true} text={"Created By"} />
          </SimpleItem>
          <SimpleItem dataField="CreationDate" editorType="dxDateBox">
            <Label visible={true} text={"Creation Date"} />
          </SimpleItem>
          <SimpleItem dataField="ModifyUserId">
            <Label visible={true} text={"Last Modification User"} />
          </SimpleItem>
          <SimpleItem dataField="ModifyDate" editorType="dxDateBox">
            <Label visible={true} text={"Last Modification Date"} />
          </SimpleItem>
          <SimpleItem dataField="IsActive" editorType="dxCheckBox" />
          <SimpleItem dataField="Description" editorType="dxTextArea">
            <TextArea
            height={90}
            maxLength={500}
            value={procedure.Description} />
          </SimpleItem>
          
        </GroupItem>
      </Form>
    </div>
  );
};

export default ProceduresFrom;
