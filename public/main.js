const title = React.createElement("h1", null, "Hello Dojo!");
const message = React.createElement("h3", null, "Things I Need To Do:");
const items = ["Learn React", "Buy Collectors Cereal", "Mow the lawn"];
const list = React.createElement("ul", null, items.map((item, index) =>
    React.createElement("li", {key: index}, `${item}`)
));
const app = React.createElement("div", null, title, message, list);

ReactDOM.render(app, document.getElementById("app"));



