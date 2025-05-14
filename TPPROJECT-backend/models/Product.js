const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
  category: String,
  subcategory: String,
  image: String, // optional image URL
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
