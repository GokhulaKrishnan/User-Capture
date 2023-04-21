// Here we have created two boxes. One for form and another for rendering lists.
// Now we have to crete the form. For that we are creating Input form under components.
// We have created the basic form and we are importing it.
// Now we have created the UI of the form and now we have to listen for the input and send it to the lists for rendering the output once submit button is clicked.

// App will receive datas i.e each input from inputForm.
// For that we are creating a function i.e an event handler fn that takes the current entered input.
// What it does is using states, it will reset the allInputs variable with the new input.
// On InputForm we are pointing out the function inputHandler using onInput.

// Inside the input handler.
// IN the previous project, we have used only one argument because there exist only one input field.
// But in this project we are having two input fields, so we are going to get two datas from the InputForm component.
// Here intead of using only array, we have used objects inside array.

// Now we have to send the collected data i.e from the InputForm component, to the InputList component.
// In InputList component it will map the array into induvidual elements using InputItem component.

// Now we can code the ErrorModal Component.

// FRAGMENT ***

// As a rule of JSX, it should return only one element and inside that element we can have as many adjacent elements we wish.
// To overcome this rule we can add a <div> </div> and wrap the whole content inside it.
// Theres also another overcoming method, i.e is to return an array seperated by comma. But it is a cumbersome process as we know each element has to have a unique key.
// So the best way is to wrap the content inside <div>
// But there arises a problem, it will lead us to div soup. i.e, nested divs which has no actual meanings.
// TO overcome this problem, we can simply use a component that returns props.children only. And we can use it as a Wrapper. This overcomes the problem of div soup.
// For that we need to create a separate component and import it to the necessary component.
// Instead of manually creating a wrapper, React provides us with a built-in wrapper called 'FRAGMENT'.
// We can simply use it by using the syntax, <React.Fragment> </React.Fragment> or using <> </>.

// UNDERSTANDING REACT PORTALS

// Suppose assume that we have a modal component inside many other components in App.js
// The cache here is that, in Real DOM the created modal component will be placed deeply inside with many other components but it is actually a separate thing that should be displayed above overall page.
// So to overcome this problem we can use the concept of Portals.
// Steps.
// First we have to create a indentifier on the location where we want to place the component.
// Here we go to index.html and add indentifier there.
// Then we go to the errormodal component. Go there.
// Now we have completed applying Portals.

// WORKING WITH REFS:

// Refs is another feature in React.
// Refs are used to make a connection with a html tag to the the JavaScript code.
// It is basically used to read a value from the input field.
// Considering the InputForm component, listening for every key strokes on the input field sounds like a bit redundant.
// What we can actually do is to use refs.
// Steps.
// Go to InputForm component.

// CONTROLLED VS UNCONTROLLED

// Uncontrolled components are components when react is not controlling the component by passsing the value back to the input field. i.e. In InputForm component, when using refs it is uncontrolled.
// Controlled components are components when react is controlling the component by passsing the value back to the input field. i.e. In InputForm component, when using states it is controlled.

import React, { useState } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import InputList from "./Components/InputList";

function App() {
  // State to update the lists based on each user input
  const [enteringInput, setEnteringInput] = useState("");

  // Input handler
  const inputHandler = (userInput, userAgeInput) => {
    setEnteringInput((previousInputs) => {
      const allInputs = [
        {
          username: userInput,
          age: userAgeInput,
          id: Math.random().toString(),
        },
        ...previousInputs,
      ];
      return allInputs;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No User inputs found. Maybe add one?</p>
  );

  // Here we are checking if there is some content to be displayed and if it is yes we are sending data to the InputList.
  if (enteringInput.length > 0) {
    content = <InputList items={enteringInput} />;
  }
  return (
    <div>
      <section id="userInput-Form">
        <InputForm onInput={inputHandler} />
      </section>
      <section id="userInput-Lists">{content}</section>
    </div>
  );
}

export default App;
