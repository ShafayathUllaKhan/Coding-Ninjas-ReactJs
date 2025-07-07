// js
// const heading = document.createElement("h2");

// heading.textContent = "Hi Shafayath";
// heading.className = "header";

// document.getElementById("root").appendChild(heading);

// console.log(heading); //<h2 class="header">Hi Shafayath</h2>

// react with js

// const reactHeading = React.createElement(
//   "h1",
//   { className: "head" },
//   "Hello React"
// );

// react with jsx it is js extension

const jsxHeading = <h1>Hello jsx</h1>;// internally it will call
//this only
// React.createElement(
// //   "h1",
// //   { className: "head" },
// //   "Hello React"
// // );

// you will get error Uncaught SyntaxError: Unexpected token '<' (at index2.js:21:21)
// for that use babel this convert jsx to js
// and go and search in browser the extra script tag when you use babel

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);


// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);


// pre updated vdom and updated vdom and orginal dom 

// const reactHeading = React.createElement(
//   "h1",
//   { className: "head" },
//   children:"Hello React"
// );

// console.log(reactHeading); // object Object
// props
// :// children
// :
// "Hello React"
// className
// :
// "head"

