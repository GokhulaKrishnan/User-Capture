// Portals
// Here we are creating two separate components.
// And we paste the required jsx code there.
// Now we have to import react dom
// Now we have to use ReactDom inside ErrorModal component to call createPortal method.
// This createPortal method requires two arguments, one is the component what we have to render and second is the place where we want to render this component.
import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.closingHandler} />;
};

const Overlay = (props) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.closingHandler}>Okay</Button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closingHandler={props.closingHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          closingHandler={props.closingHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
