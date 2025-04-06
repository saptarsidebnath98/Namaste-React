import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "Namaste React!");


//JSX - is not HTML in JS
const JSXHeading = <h1 id="JSXHeading">Heading in JSX 💥</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JSXHeading);