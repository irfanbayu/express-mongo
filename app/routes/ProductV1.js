const routerv1 = require("express").Router();
const controller = require("../controllers/ProductsV1");

routerv1.get("/", controller.getProducts);
routerv1.get("/:id", controller.findById);
routerv1.post("/", controller.addProduct);
routerv1.put("/:id", controller.updateProduct);
routerv1.delete("/:id", controller.deleteProduct);

module.exports = routerv1;
