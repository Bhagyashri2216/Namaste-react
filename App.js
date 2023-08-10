import React from "react"
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent", },
[
React.createElement("div",{id:"child"},[
    React.createElement("h1",{}, "This is namaste react 🚀 😊👌 "),
    React.createElement("h2",{}, "Parcel is a beast"),

] ),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{}, "I'm an H1 tag"),
    React.createElement("h2",{}, "I'm an h2 tag"),
]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



