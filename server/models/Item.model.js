const mongoose = require("mongoose");Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
	picture : String
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
