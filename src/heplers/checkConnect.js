"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
    console.log(`Number of connections:: ${numConnection}`);
    // Example maximum number of connections based on number of cores
    const maxConnections = numCores * 5;
    if (numConnection > maxConnections) {
      console.log(`Connection overload detected`);
    }
  }, _SECONDS);
};

module.exports = { countConnect, checkOverload };
