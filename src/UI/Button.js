// Here we are creating/ Designing the AddUser button and it is on a separate component.
// We are just creating a button elment in this component.
// For displaying the content that is written in hte InputForm component, we have to send the data via props and we are displaying it here using {props.children}

import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
