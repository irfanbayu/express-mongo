const Products = require("../models/ProductsV2");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find();

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const findById = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await Products.findOne({ _id: id });

    if (!products) return res.status(404).send("not found");

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const addProduct = async (req, res) => {
  const { name, price, stock, status } = req.body;
  try {
    if (!name || !price) return res.status(400).send("field cannot be empty");

    const products = await Products.create({
      name,
      price,
      stock,
      status,
    });

    res.status(201).json({
      msg: "product created!",
      products,
    });
  } catch (error) {
    res.send(400).json(error.message);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, status } = req.body;

  try {
    const products = await Products.findOne({ _id: id });

    if (!products) return res.status(404).send("not found");

    await Products.updateOne(
      {
        _id: products._id,
      },
      { name, price, stock, status }
    );
    res.status(200).send(`product with id : ${products._id} has been updated`);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await Products.findOne({ _id: id });
    if (!products) return res.status(404).send("not found");
    await Products.deleteOne({ _id: id });
    res.status(200).send(`product with id : ${products._id} has been deleted`);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

module.exports = {
  getProducts,
  findById,
  addProduct,
  updateProduct,
  deleteProduct,
};
