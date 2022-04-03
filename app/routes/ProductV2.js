const routerv2 = require("express").Router();
const controller = require("../controllers/ProductsV2");

routerv2.get("/", controller.getProducts);
routerv2.get("/:id", controller.findById);
routerv2.post("/", controller.addProduct);
routerv2.put("/:id", controller.updateProduct);
routerv2.delete("/:id", controller.deleteProduct);

module.exports = routerv2;
