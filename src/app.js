const express = require("express");
const morgan = require("morgan");
const app = express();

// init middleware
app.use(morgan("dev"));

//init db

//init routes

//handling errors

module.exports = app;
