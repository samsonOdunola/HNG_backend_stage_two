const config = require("./config");
const express = require("express");
const App = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const port = config.port || process.env.PORT;
const mongoUrl = process.env.DBURL;
const routes = require("./routes");

const options = {
  autoIndex: true, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  minPoolSize: 5,
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4,
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

App.use(express.urlencoded({ extended: false }));
App.use(express.json({ limit: "50mb" }));
App.use(cors());
App.use("/api", routes);
App.get("/", (req, res) => {
  res.send("welcome to my API");
});

mongoose.connect(mongoUrl, options);
db = mongoose.connection;
db.on("error", (err) => {
  console.error("Error connecting to database.", err);
});
db.once("connected", () => {
  console.log("Database Connection is Successful");
  App.listen(port, () => {
    console.log("Server is running on port " + port);
  });
});
db.once("disconnected", () => {
  console.info("Database Disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close((err) => {
    console.info("Database Connection Closed Due to App Termination");
    process.exit(err ? 1 : 0);
  });
});
