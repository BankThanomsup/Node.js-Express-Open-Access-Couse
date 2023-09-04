//Import module


const app = express();
const PORT = process.env.PORT;
const path = require("path");

const debug = require("debug")("app");
const chalk = require("chalk");
const morgan = require("morgan");
const productRouter = require("./src/router/productsRouter")

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");



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
