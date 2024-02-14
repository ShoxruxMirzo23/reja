console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

//Mongo chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

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
  console.log("user enetered /created-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plan").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.get("/", function (req, res) {
  console.log("user enetered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
