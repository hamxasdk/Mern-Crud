const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//import routes

const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

// app

const app = express();

// db

const url = "mongodb://127.0.0.1:27017/Test-db";
//process.env.DATABASE
mongoose
  .connect(process.env.DATABASE, {
    // config
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch(() => console.log("there was an error"));

// middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes middleware
app.use("/api", postRoutes);
app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`App is Listening to port: ${port}`));
