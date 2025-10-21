import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h1>React Tutorial</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
