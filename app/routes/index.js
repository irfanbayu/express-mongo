const routes = require("express").Router();
const routerV1 = require("./productV1");
const routerV2 = require("./productV2");

routes.use("/v1/products", routerV1);
routes.use("/v2/products", routerV2);

module.exports = routes;
