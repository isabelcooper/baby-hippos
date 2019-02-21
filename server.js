const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const db = require("./Database/connection")

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

const app = express();
const dev = app.get("env") !== "production";

// if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

 app.use(express.static(path.resolve(__dirname, "build")));

  app.get("/index", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
 // }

// if (dev) {
//   app.use(morgan("dev"));
//   app.use(express.static(path.resolve(__dirname, "build")));
// }
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.get('/spaces', db.getSpaces)
app.get('/spaces/:id', db.getSpaceById)
app.post('spaces/new', db.createSpace)

//
// app.get("*", (req, res) => {
//   res.json(db.getUsers(req,res))
//   console.log("here");
//   res.sendFile(path.resolve(__dirname, "build", "index.html"));
// })

const server = createServer(app);
server.listen(PORT, err => {
  if (err) throw err;
  console.log("Server Started!");
});
