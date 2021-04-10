import React from "react";
import Form, { GroupItem, SimpleItem, TextArea } from "devextreme-react/form";
import "./procedures-from.scss";

const ProceduresFrom = ({ procedure = {}, isReadOnly }) => {
  console.log("ProceduresFrom: ", procedure);

  return (
    <div className="ProceduresFrom-container">
      {/* <div className="ProceduresFrom-header">From</div> */}
      <Form
        id="From"
        formData={procedure}
        readOnly={isReadOnly}
        showColonAfterLabel={true}
        labelLocation={"left"}
        minColWidth={500}
        colCount={2}
        width={600}
      >
        <GroupItem caption="Form">
          <SimpleItem dataField="Name" />
          <SimpleItem dataField="CreatingUserId" />
          <SimpleItem dataField="CreationDate" />
          <SimpleItem dataField="ModifyUserId" text="AAAAA" />
          <SimpleItem dataField="ModifyDate" />
          <SimpleItem dataField="IsActive" />
          <SimpleItem dataField="Description" />
        </GroupItem>
      </Form>
    </div>
  );
};

export default ProceduresFrom;
