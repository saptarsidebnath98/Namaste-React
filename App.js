const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "This App.js Heading!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is h1 under child1 and parent!"),
    React.createElement("h2", {}, "This is h2 under child1 and parent!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 under child2 and parent!"),
    React.createElement("h2", {}, "This is h2 under child2 and parent!"),
  ]),
  React.createElement("div", {id: "newDiv"}, React.createElement("img", {id: "img1", src: "https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , alt: "img_logo"})),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
