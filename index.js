const express = require("express");
const cors = require("cors");

const { dbConnectionV1, dbConnectionV2 } = require("./configDB");
const PORT = 8000;

const routes = require("./app/routes");
const app = express();
const logger = require("morgan");

app.use(logger("dev"));

app.use(express.json());

app.use(cors());

app.use("/api", routes);

app.listen(PORT, async () => {
  try {
    await dbConnectionV1();
    await dbConnectionV2();
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
