const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product must have a name"],
        minlength: [3, "Name must contain at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Product must have a price"],
        min: [0, "Price cannot be negative"]
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
        minlength: [10, "Description cannot be fewer than 10 characters"]
    }
});

module.exports = mongoose.model("Product", ProductSchema);
// product.js