const Customer = require("./routers/customerRouter");
const Product = require("./routers/productRourter");
const AddtoCard = require('./routers/cardRouter')
module.exports = function (app) {
    app.use("/Customer", Customer);
    app.use("/Product", Product);
    app.use("/AddToCard",AddtoCard)
};