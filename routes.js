const controller = require("./controller");

module.exports = function (app) {
    app.get("/products", controller.getProducts);
    app.post("/products", controller.createProduct);
    app.get("/products/:id", controller.getProduct);
    app.put("/products/:id", controller.updateProduct);
    app.delete("/products/:id", controller.destroyProduct);
};

// routes.js