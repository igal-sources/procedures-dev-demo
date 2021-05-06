import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import * as types from "../../types";
import "./confirm-dialog.scss";

const ConfirmDialog = (headerText, messageText, onConfirm = types.EmptyFn) => {
  confirmAlert({
    title: headerText,
    message: messageText,
    buttons: [
      {
        label: "Yes",
        onClick: onConfirm,
        //className: "",
      },
      {
        label: "No",
        //className: "",
      },
    ],
  });
};

export default ConfirmDialog;
