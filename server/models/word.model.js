const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
	name: String,
	
});

const word = mongoose.model("Word", wordSchema);
module.exports = word;
