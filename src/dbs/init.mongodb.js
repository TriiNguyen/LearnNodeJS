"use strict";

const mongoose = require("mongoose");
const { countConnect } = require("../heplers/checkConnect");
const connectString = "mongodb://localhost:27017/shopDEV";

const {
  db: { host, port, name },
} = require("../configs/config.mongodb");

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(`mongodb://${host}:${port}/${name}`)
      .then(() => {
        console.log("Connected to MongoDB PRO");
        countConnect();
      })
      .catch((err) => {
        console.log("Error connecting to MongoDB", err);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = new Database();

module.exports = instanceMongodb;
