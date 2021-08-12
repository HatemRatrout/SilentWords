const mongoose = require("mongoose");Schema = mongoose.Schema;

const queSchema = new mongoose.Schema({
	question : String ,
    answers : [String],
    correct : String
});

const Question = mongoose.model("Question", queSchema);
module.exports = Question;
