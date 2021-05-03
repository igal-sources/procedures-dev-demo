import React from "react";
import Form, { GroupItem, SimpleItem, Label, RequiredRule } from "devextreme-react/form";
import 'devextreme-react/text-area';
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
          <SimpleItem
            dataField="CreatingUserId"
            editorOptions={{
              readOnly: true,
            }}
          >
            <Label visible={true} text={"Created By"} />
          </SimpleItem>
          <SimpleItem dataField="CreationDate" editorType="dxDateBox" editorOptions={{
              readOnly: true,
            }}>
            <Label visible={true} text={"Creation Date"} editorOptions={{
              readOnly: true,
            }}/>
          </SimpleItem>
          <SimpleItem dataField="ModifyUserId">
            <Label visible={true} text={"Last Modification User"} editorOptions={{
              readOnly: true,
            }}/>
          </SimpleItem>
          <SimpleItem dataField="ModifyDate" editorType="dxDateBox" editorOptions={{
              readOnly: true,
            }}>
            <Label visible={true} text={"Last Modification Date"} />
          </SimpleItem>
          <SimpleItem dataField="IsActive" editorType="dxCheckBox" />
          <SimpleItem dataField="Description" editorType="dxTextArea">
          </SimpleItem>
        </GroupItem>
      </Form>
    </div>
  );
};

export default ProceduresFrom;
