"use strict";

// level 0
//const config = {
//  app: {
//    port: process.env.PORT || 3000,
//  },
//  db: {
//    host: process.env.DB_HOST || "localhost",
//    port: process.env.DB_PORT || 27017,
//    name: process.env.DB_NAME || "shopDEV",
//  },
//};

//level 1

const dev = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || "dbDEV",
  },
};

const production = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    host: process.env.PRO_DB_HOST || "localhost",
    port: process.env.PRO_DB_PORT || 27017,
    name: process.env.PRO_DB_NAME || "dbPRO",
  },
};
const config = { dev, production };
const env = process.env.NODE_ENV || "dev";
module.exports = config[env];
