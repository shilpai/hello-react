/**
 * <div id:"parent">
 * <div id: "child">
 * <h1>Hello I am h1 tag...</h1>
 * <h2>Hello I am h2 tag...</h2>
 * </div>
 *  <div id: "child-2">
 * <h1>Hello I am h1 tag...</h1>
 * <h2>Hello I am h2 tag...</h2>
 * </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am h1 tag..."),
    React.createElement("h2", {}, "Hello I am h1 tag..."),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "Hello I am h1 tag..."),
    React.createElement("h2", {}, "Hello I am h1 tag..."),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
