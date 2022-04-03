const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
// const url =
//   "mongodb://task-mongo:123456@localhost:27017?authSource=eduwork-mongoose";

const client = new MongoClient(url);
const dbName = "eduwork-mongoose";

const dbConnectionV1 = async () => {
  try {
    await client.connect();
    console.log("connected to Database V1");
  } catch (error) {
    console.log(error.message);
  }
};

const db = client.db(dbName);

const dbConnectionV2 = async () => {
  try {
    await mongoose.connect(`${url}/${dbName}`);
    console.log("connected to Database V2");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { dbConnectionV1, dbConnectionV2, db };
