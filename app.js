//Import module

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const debug = require("debug")("app");
const chalk = require("chalk");
const morgan = require("morgan");
const productRouter = express.Router;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

// productRouter.route("/").get((req, res) => {
//     res.send("Hello World !! I'm Product")
// });

// productRouter.route("/1").get((req, res) => {
//     res.send("Hello World !! I'm Product 1")
// });

app.use("/Products", productRouter);

app.get("/", (req, res) => {
  res.render("index", {username: "Bankza55+",customers: ["kitti", "Kittikon", "Kitty"],
  });
});

app.listen(PORT, () => {
  debug("Listening on port" + chalk.red(" : " + PORT));
});


