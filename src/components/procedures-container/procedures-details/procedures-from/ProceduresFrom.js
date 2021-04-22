import React from "react";
import Form, { GroupItem, SimpleItem, Label } from "devextreme-react/form";
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
        <GroupItem caption="From">
          <SimpleItem dataField="Name" />
          <SimpleItem dataField="CreatingUserId">
            <Label visible={true} text={"Created By"} />
          </SimpleItem>
          <SimpleItem dataField="CreationDate">
            <Label visible={true} text={"Creation Date"} />
          </SimpleItem>
          <SimpleItem dataField="ModifyUserId">
            <Label visible={true} text={"Last Modification User"} />
          </SimpleItem>
          <SimpleItem dataField="ModifyDate">
            <Label visible={true} text={"Last Modification Date"} />
          </SimpleItem>
          <SimpleItem dataField="IsActive" />
          <SimpleItem dataField="Description" />
        </GroupItem>
      </Form>
    </div>
  );
};

export default ProceduresFrom;
