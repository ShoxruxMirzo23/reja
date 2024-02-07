console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");
// 1: Kirish kodlar
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session kodlar
// 3Views kodlar

app.set("views", "viewws");
app.set("view engine", "ejs");

// 4: Routing kodlar
app.get("/hello", function (req, res) {
  res.end(`<h1>HELLO WORLD</h1>`);
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});
app.get("/gift", function (req, res) {
  res.end(`<h1>siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
});
