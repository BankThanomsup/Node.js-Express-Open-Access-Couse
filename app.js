//Import module

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const products = require("./data/products.json");
const debug = require("debug")("app");
const chalk = require("chalk");
const morgan = require("morgan");
const productRouter = express.Router();

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
  res.render("products", products);
});

productRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  res.render("product",{
    product:products[id],
  })
});

app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "Bankza55+",
    customers: ["kitti", "Kittikon", "Kitty"],
  });
});

app.listen(PORT, () => {
  debug("Listening on port" + chalk.red(" : " + PORT));
});
