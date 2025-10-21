import React from "react";
import ReactDOM from "react-dom/client";

//==========================================================================================

// Greeting component using JSX under the hood
function Greeting() {
  return <h1>Greeting with JSX</h1>;
}
// function Greeting() {
//   return React.createElement("h1", {}, "Greeting without JSX :o"); // Can also replace {} with null
// }

//==========================================================================================

// Greeting2 componenet using JSX with divs
function Greeting2() {
  return (
    <div>
      <h1>Greeting2 with JSX</h1>
    </div>
  );
}
// function Greeting2() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Greeting2 without JSX :o")
//   );
// }

//==========================================================================================

// A JSX rule is for there to be one parent element per component
// If after return there were two elements at the top level, it would throw an error
// Consider using HTML5 semantic elements
function Parent() {
  return (
    <section>
      <div className="someValue">
        <h2>All of this is wrapped in one single parent element</h2>
        <p>This is a child element</p>
      </div>
      <article>
        <ul>
          <li>
            <p>Random item within an article</p>
          </li>
        </ul>
      </article>
    </section>
  );
}
// React Fragments have a shorthand <></> and a longhand <React.Fragment></React.Fragment>
// Longhand needs to import React, shorthand does not
// Fragments allow for multiple elements to be returned without a parent element like divs or sections
function Fragment() {
  return (
    <>
      <h2>This is using React's fragment</h2>
      <React.Fragment>
        <h3>Fragment child 1</h3>
      </React.Fragment>
    </>
  );
}

//==========================================================================================

// Remember to close all tags
// Self-closing tags for img, input, br, hr, etc.
<img src="path/to/image" alt="description" />;

//==========================================================================================

// Nesting components
function Nesting() {
  return (
    <div>
      {/* <h2>John Doe</h2>
      <p>This is my message</p> */}
      <Person />
      <Message />
    </div>
  );
}
// These are the nested components used in the Nesting component
const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <Greeting /> {/* Simple JSX component call */}
//     <Greeting2 /> {/* JSX component with divs call */}
//     <Parent /> {/* Parent element example call */}
//     <Fragment /> {/* React Fragment example call */}
//     <Nesting /> {/* Nesting components example call */}
//   </>
// );
