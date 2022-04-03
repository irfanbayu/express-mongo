const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    minlength: 1000,
    maxlength: 100000000,
  },
  stock: Number,
  status: {
    type: Boolean,
    default: true,
  },
});

const Products = mongoose.model("products", productSchema);
module.exports = Products;
