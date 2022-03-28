const routes = require("express").Router();
const routerV1 = require("./productV1");

routes.use("/v1/products", routerV1);

module.exports = routes;
