const express = require('express');
const { fetchAllProducts, addProducts, fetchProductsByTitle, fetchProductsById, fetchProductsByCategory, deleteById, updateProducts } = require('../controller/productController');
const { updateMany } = require('../models/productSchema');

const router = express.Router();

router.get("/getallProducts",fetchAllProducts);
router.post("/addProduct",addProducts);
router.get("/getProductByTitle/:id",fetchProductsByTitle);
router.get("/getProductById/:id",fetchProductsById);
router.get("/getProductsByCategory/:id",fetchProductsByCategory);
router.delete("/deleteProductById/:id",deleteById);
router.put("/updateProductsById/:id",updateProducts);

module.exports = router;