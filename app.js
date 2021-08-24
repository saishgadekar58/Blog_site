const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const newsRouter = require("./src/routes/news");

app.use("/", newsRouter);
app.use("/article", newsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
