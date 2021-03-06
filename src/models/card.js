const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    customerId: { 
        type: String, 
        required: true, 
        ref: "Customer" 
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
