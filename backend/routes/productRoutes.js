const express = require("express");
const {
  getallproducts,
  getoneprod,
  deleteprod,
  updateprod,
  addProduct,
} = require("../controllers/productControllers");

const {
  isAdmin,
  isAuthorized,
} = require("../middlewares/authorization/IsAdmin");
const IsAuth = require("../middlewares/authorization/IsAuth");
const {
  validator,
  AddProductRules,
} = require("../middlewares/validation/bodyValidation");
const upload = require("../utils/multer");
const router = express.Router();

/**
 * @route POST /product/add
 * @description add new product
 * @access protected(authentifié+role:admin/seller)
 */
router.post(
  "/add",
  IsAuth(),
  isAuthorized,
  //   AddProductRules,
  //   validator,
  upload("products").single("image"),
  addProduct
);
/**
 * @route get /product/
 * @description get all products
 * @access public
 */
router.get("/", getallproducts);
/**
 * @route get /product/:idprod
 * @description get one product
 * @access public
 */
router.get("/:idprod", getoneprod);
/**
 * @route patch /product/:idprod
 * @description update  product
 * @access protected
 */
router.put(
  "/:idprod",
  IsAuth(),
  isAdmin,
  AddProductRules,
  validator,
  upload("products").single("image"),
  updateprod
);
/**
 * @route delete /product/:idprod
 * @description delete  product
 * @access protected
 */

router.delete("/:idprod", IsAuth(), isAdmin, deleteprod);
module.exports = router;
