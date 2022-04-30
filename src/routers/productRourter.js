const router = require("express").Router();

const product = require("../controller/productController");

/**
 * @api {POST} /Product/createProduct
 * @desc  Add Product API
 * @access public
 * **/
router.post("/createProduct", product.createProduct);

module.exports = router;