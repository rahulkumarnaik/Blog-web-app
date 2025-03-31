import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import postRouter from "./routes/post.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./view");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.use(methodOverride("_method"));

// Use routes
app.use("/", postRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});