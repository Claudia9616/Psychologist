const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.json());
app.use(
  cors({
    origin: "localhost:8080",
  })
);
app.use(helmet());

app.use((req, res, next) => {
  console.log("Principal");
  console.log(`${req.method} ${Date.now} ${req.url} ${req.path}`);
  next();
});

module.exports = app;
