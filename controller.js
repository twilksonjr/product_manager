const mongoose = require("mongoose");

const Product = require("./product");

module.exports = {
    getProducts: (req, res) => {
        Product.find()
            .then((products) => {
                return res.json(products);
            })
            .catch((err) => {
                return res.json(err);
            });
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((product) => {
                return res.json(product);
            })
            .catch((err) => {
                return res.json(err);
            });
    },

    getProduct: (req, res) => {
        Product.findOne({
                _id: req.params.id
            })
            .then((product) => {
                return res.json(product);
            })
            .catch((err) => {
                return res.json(err);
            });
    },

    updateProduct: (req, res) => {
        Product.update({
                _id: req.params.id
            }, {
                title: req.body.title,
                price: req.body.price,
                imageUrl: req.body.imageUrl,
                description: req.body.description
            }, {
                runValidators: true
            })
            .then((product) => {
                return res.json(product);
            })
            .catch((err) => {
                return res.json(err);
            });
    },

    destroyProduct: (req, res) => {
        Product.remove({
                _id: req.params.id
            })
            .then((product) => {
                return res.json(product);
            })
            .catch((err) => {
                return res.json(err);
            });
    }
};