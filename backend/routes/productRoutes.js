const express = require("express");
const { getallproducts } = require("../controllers/productControllers");
const router = express.Router();

/**
 * @route get /product/
 * @description get all products
 * @access public
 */

router.get("/allproducts", getallproducts);

module.exports = router;


