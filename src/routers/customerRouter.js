const router = require("express").Router();

const customer = require("../controller/customerController");

/**
 * @api {POST} /Customer/addCustomer
 * @desc  Add Customer API
 * @access public
 * **/
router.post("/addCustomer", customer.addCustomer);
/**
 * @api {POST} /Customer/loginCustomer
 * @desc  Login Customer API
 * @access public
 * **/
router.post("/loginCustomer", customer.loginCustomer);

module.exports = router;