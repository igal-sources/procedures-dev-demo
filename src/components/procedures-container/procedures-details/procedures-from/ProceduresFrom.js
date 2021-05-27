import React, { useState, useEffect } from "react";
import Form, { GroupItem, SimpleItem, Label, RequiredRule } from "devextreme-react/form";
import moment from "moment";
import "devextreme-react/text-area";
import "./procedures-from.scss";

const ProceduresFrom = ({ procedure = {}, isReadOnly }) => {
  const [creationDate, setCreationDate] = useState();
  console.log('creationDate: ', creationDate);
  //console.log("ProceduresFrom: ", procedure);

  const convertFromProto = () => {
    const protoDate = getDate();
    console.log("getDate().toDate(): ", getDate().toDate());
    var date = new Date(protoDate.toDate());

    const finalDate = moment(date).format("YYYY-MM-DD");
    console.log("finalDate: ", finalDate);
    setCreationDate(finalDate);
    //return finalDate;
  };

  const getDate = () => {
    if (window.proto) {
      const proto = window.proto;
      const timestamp = new proto.google.protobuf.Timestamp();
      const timeMS = Date.now();
      timestamp.setSeconds(timeMS / 1000);
      timestamp.setNanos((timeMS % 1000) * 1e6);

      return timestamp;
    }
  };

  const onDateValueChanged = (e) => {
    console.log("onDateValueChanged", e.value);
  };

  useEffect(() => {
    convertFromProto();

    return () => {
      // isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <SimpleItem dataField="name">
            <RequiredRule message="Name is required" />
          </SimpleItem>
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
            defaultValue={creationDate}
            //onValueChanged={(d) => onDateValueChanged}
            editorOptions={{
              readOnly: true,
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
          <SimpleItem dataField="modifyuserid">
            <Label
              visible={true}
              text={"Last Modification User"}
              editorOptions={{
                readOnly: true,
              }}
            />
          </SimpleItem>
          <SimpleItem
            //dataField="modifydate"
            editorType="dxDateBox"
            editorOptions={{
              readOnly: true,
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
