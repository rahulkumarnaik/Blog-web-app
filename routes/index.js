import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import postRoutes from "./post.js"; 



const app = express();
const port = 3000;

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//use routes
app.use("/", postRoutes);

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
