const cardModel = require("../models/card");

module.exports = {
  addtoCard: async (req, res) => {
    try {
      let addCard = new cardModel({
        customerId: req.user._id,
        products: {
          productId: req.body.productId,
          quantity: req.body.quantity,
        },
      });
      let newAddcard = await addCard.save();

      return res.status(200).send({
        message: "Add Card Successfully",
        status: true,
        data: newAddcard,
      });
    } catch (error) {
      return res.status(400).send({
        message: "Please Enter All Details",
        status: false,
      });
    }
  },
};
