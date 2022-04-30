const customerModel = require("../models/customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    addCustomer(req, res) {
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.password
        ) {
            return res.status(400).send({
                message: "Please Provide Required Field",
            });
        }
        customerModel.find({ email: req.body.email }).exec((err, result) => {
            if (err) {
                console.log("Error", err);
            } else {
                if (result.length > 0) {
                    return res.send({
                        message: "Already Use These Email"
                    });
                } else {
                    let user = new customerModel(req.body);

                    bcrypt.genSalt(10, (err, salt) => {
                        if (err) {
                            console.log("Error", err);
                        } else {
                            bcrypt.hash(user.password, salt, (err, hash) => {
                                if (err) {
                                    console.log("Error", err);
                                } else {
                                    user.password = hash;

                                    user.save((err, result) => {
                                        if (err) {
                                            console.log("Error", err);
                                        } else {
                                            console.log("Customer Data Added Successfully", result);

                                            return res.status(200).send({
                                                message: "Add Customer",
                                                status: true,
                                                data: result
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    },
    loginCustomer: async (req, res) => {
        try {
            customerModel.findOne({ email: req.body.email }, (err, user) => {
                if (err) return res.status(400).send({
                    status: false,
                    message: 'Please try after some time'
                });
                if (!user) return res.status(400).send({
                    status: false,
                    message: 'You are not registered!',
                })
                bcrypt.compare(req.body.password, user.password, (err, data) => {
                    if (!data) return res.status(400).send({
                        status: false,
                        message: 'Wrong password!'
                    })
                    else return res.status(200).send({
                        status: true,
                        token: jwt.sign({ email: user.email, _id: user._id }, "secret", {}),
                        data: user,
                    });
                })
            })
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                status: false
            })
        }
    }
}