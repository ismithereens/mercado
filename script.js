const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 3000;

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayour: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
  })
);

app.use(express.static("assets"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist/"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Productos",
    producto: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
  });
});
app.listen(port, () =>
  console.log(`Se inicio el server en la siguiente URL: http://localhost:${port}`)
);
