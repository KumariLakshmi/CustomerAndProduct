const router = require("express").Router();
const Auth = require("../middleware/authentication");
const addtoCard = require("../controller/cardController");

/**
 * @api {POST} /Customer/addtoCard
 * @desc  Add To Card API
 * @access public
 * **/
 router.post("/addtoCard", Auth.VerifyToken, addtoCard.addtoCard);
module.exports = router;
 