// This component is used to create every <li> elements on the list.
// This uses map to loop and create InputItem

import React from "react";
import InputItem from "./InputItem";
import "./InputList.css";

const InputList = (props) => {
  console.log(props.items);
  return (
    <ul className="input-list">
      {props.items.map((item) => (
        <InputItem key={item.id} id={item.id}>
          {item.username} ({item.age} years old)
        </InputItem>
        // <p>{item.username}</p>;
      ))}
    </ul>
  );
};

export default InputList;
