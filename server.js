const http = require("http");
const mongodb = require("mongodb");

// MongoDB connection:
let db;
const connectionString =
  "mongodb+srv://bob:Leb5zTbM2aumYE9Y@cluster0.2yprjrq.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          ` The server is running succesfully on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
