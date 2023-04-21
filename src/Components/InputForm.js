// Here we are going to create form elements
// We have to create form element inside return.

// In this we have to listen for the event change in the input field.
// Once we got the inputs, we have to send it to the parent node to be used by other elements.
// The parent node is App.js.

// Here we are using two states, one for the username and another for the Age.
// In submit handler, we are going to pass two arguments to the App.js function

// Here we have used two way binding to clear the input field after submitting.
// Two way binding is implemented by using value attribute inside the input field.

// Now we have to handle error.
// We have created ErrorModal component.
// We have to pass dynamic values to that component.
// For this we have to change the variable, so we have to use State.
// For that inside submit handler, we can setError based on a particular condition.
// We can pass the error inside / near ErrorModal tag.

// Now we have to implement the closing process.
// For implementing the closing tech, we can initialize state to undefined or any other falsy values because of the codintion used inside the ErrorModal tag.

// REFS

// 1. Import useRefs from react.
// 2. Similar of using state, call the useRef Fn inside the component fn and assign it a const var.
// 3. Use the ref attribute inside the input field, it will be available on every html elements as same as key attribute.
// 4. Now we have established a connection, we can use ref inside the submitHandler.
// 5. If we console.log(nameInputRef), it will print object which always has the attribute 'current'.
// 6. It is actually a DOM. Inside it it has value property using which we can access the value.
// 7. Now we can assign the input ref to a const helper variable and use it.
// 8. Now we can actually get rid of using the state.
// 9. There's one more thing. We have to reset the input fields to empty after submitting.
// 10. In that case we can modify the DOM, which should not be used frequently.
import React, { useState, useRef } from "react";
import "./InputForm.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const InputForm = (props) => {
  // Using Refs
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Using states
  // const [enteredValue, setEnteredValue] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // Event handling function that is used to set the username data.
  // const inputUsernameHandler = (event) => {
  //   setEnteredValue(event.target.value);
  // };

  //  Event handling function that is used to set the age data.
  // const inputAgeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  //  Submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // User should enter some value for age and Username and only then we can add the list item to the output.
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age(age > 0)",
      });
      return;
    }
    props.onInput(enteredName, enteredUserAge);

    // Resetting the input boxes to empty state
    // setEnteredAge("");
    // setEnteredValue("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // Handling closing

  // We can call this function inside the ErrorModal Component.
  const errorHandler = () => {
    setError(null);
    // setEnteredAge("");
    // setEnteredValue("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closingHandler={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="input-control">
          <label>Username</label>
          <input
            type="text"
            // value={enteredValue}
            // onChange={inputUsernameHandler}
            ref={nameInputRef}
          />
        </div>
        <div className="input-control">
          <label>Age (Years)</label>
          <input
            type="number"
            // value={enteredAge}
            // onChange={inputAgeHandler}
            ref={ageInputRef}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default InputForm;
