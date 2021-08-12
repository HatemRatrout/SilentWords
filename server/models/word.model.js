const mongoose = require("mongoose");Schema = mongoose.Schema;

const wordSchema = new mongoose.Schema({
	title : String ,
	picture : String,
	Items :[{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

const word = mongoose.model("Words", wordSchema);
module.exports = word;
