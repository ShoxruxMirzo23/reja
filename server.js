console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

// 1: Kirish kodlar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session kodlar
// 3Views kodlar
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing kodlar
app.post("/create-item", (req, res) => {
  //TODO:code with db here
});

app.get("/", function (req, res) {
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
