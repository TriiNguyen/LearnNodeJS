const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db
require("./dbs/init.mongodb");
const { checkOverload } = require("./heplers/checkConnect");
checkOverload();
//init routes

//handling errors

module.exports = app;
