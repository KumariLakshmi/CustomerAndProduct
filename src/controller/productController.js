const productModel = require("../models/product");

module.exports ={
    createProduct: async (req, res) => {
        try {
          let newProduct = new productModel({
            name: req.body.name,
            amount: req.body.amount,
            quantity: req.body.quantity,
            description: req.body.description
          });
          let creatProduct = await newProduct.save();
          return res.status(200).send({
            message: "Product Created Successfully",
            status: true,
            data: creatProduct,
          });
        } catch (error) {
          return res.status(400).send({
            message: "Please Enter All Details",
            status: false,
          });
        }
      },
}