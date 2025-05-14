const express = require("express");
const router = express.Router(); // ✅ defines the router
const Product = require("../models/Product");

// --- Search by query ---
router.get("/search", async (req, res) => {
  const query = req.query.q?.trim();
  console.log("🔍 Search query:", query);

  if (!query) {
    return res.status(400).json({ error: "Search query is missing." });
  }

  try {
    const products = await Product.find({
      name: { $regex: query, $options: "i" },
    });
    console.log("✅ Found products:", products.length);
    res.json(products);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// --- Get a product by ID ---
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("🔍 Fetching product with id:", id);
  try {
    const product = await Product.findById(id);
    if (product) {
      console.log("✅ Product found:", product.name);
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    console.error("Product fetch error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
