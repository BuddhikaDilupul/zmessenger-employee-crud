const express = require("express");
const morgan = require("morgan");

const config = require("../config");
const apiRouter = require("../routes/api");
const errorHandler = require("../middlewares/errorHandler");
const cors = require('cors')
const fs = require('fs');


const logStream = fs.createWriteStream('log.txt', { flags: 'a' });


const app = express();
app.use(morgan("tiny")); //logger
app.use(morgan('tiny', { stream: logStream }));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const corsOptions = {
  origin: '*',
  credentials: true, 
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(function (req, res, next) {
  console.log("Logged");
  next();
});

app.get("/", (req, res) => {
  return res.json({ message: "Hello" });
});

app.use("/api", apiRouter);

app.use(errorHandler.handleError);
exports.start = () => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log("Error: ${err}");
      process.exit(-1);
    }
    console.log("Backend Service is working at port", config.port);
  });
};

