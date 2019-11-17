import React from "react";

const ErrorField = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return <small id="emailHelp" className="form-text text-muted">{message}</small>;
  }
  return '';
};

export default ErrorField;