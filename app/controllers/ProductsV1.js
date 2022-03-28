const { ObjectId } = require("bson");
const { db } = require("../../configDB");

const collection = db.collection("products");

const getProducts = async (req, res) => {
  try {
    const products = await collection.find().toArray();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const findById = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await collection.findOne({ _id: ObjectId(id) });

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

    if (!stock) stock = 1;

    if (!status) status = false;

    const products = await collection.insertOne({
      name,
      price,
      stock,
      status,
    });
    res.status(201).send({
      msg: "products created",
      products,
    });
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await collection.findOne({ _id: ObjectId(id) });

    if (!products) return res.status(404).send("not found");

    await collection.updateOne(
      {
        _id: ObjectId(products._id),
      },
      { $set: req.body }
    );

    res.status(200).send(`products with id : ${products._id} updated`);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await collection.findOne({ _id: ObjectId(id) });

    await collection.deleteOne({ _id: ObjectId(products._id) });

    res.status(200).send(`products with id : ${products._id} deleted`);
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
