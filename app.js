const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

mongoose.connect("mongodb://localhost/ProductManager", {
    useNewUrlParser: true
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.json());

require("./server/routes")(app);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/dist/public/index.html'));
});

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));