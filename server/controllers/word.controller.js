const Words = require("../models/word.model");
const Item = require("../models/item.model");
const Question = require("../models/Question.model");
const { json } = require("express");


module.exports.findAll = (req, res)=>{
  Words.find({})
        .then(words => res.json(words))
        .catch(err => res.json(err));
}

module.exports.findAllItems = (req, res)=>{
        Item.find({})
        .then(items => res.json(items))
        .catch(err => res.json(err));
}

module.exports.findAllQuestions = (req, res)=>{
        Question.find({})
        .then(items => res.json(items))
        .catch(err => res.json(err));
}

module.exports.findById =(req, res)=>{
  Words.findOne({_id: req.params.id}).populate('Items')
        .then(word=> res.json(word.Items))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) =>{
    const {link, url,title,width} = req.body;
    Words.create({link,url, title,width})
        .then(word => res.json(word))
        console.log(word)
        .catch(err => res.status(400).json(err));
}

module.exports.createQuestion = (req, res) =>{
    const {question , answers , correct} = req.body;
    Question.create({question , answers , correct})
        .then(que => res.json(que))
        .catch(err => res.status(400).json(err));
}


module.exports.createItem = (req, res) =>{
    const {picture} = req.body;
    Item.create({picture})                                                              
    .then( item => {
        console.log(item)
            Words.findOneAndUpdate({'_id': req.params.id},{ 
                    $push:{ Items : item }
                })
                .then(res => console.log(res))
         res.json(item)
         .catch(err => res.status(400).json(err));  
    })
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) =>{
  Words.deleteOne({_id: req.params.id})
        .then(r => res.json(r))
        .catch(err => res.json(err));
}

module.exports.update = (req, res) =>{
  Words.updateOne({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(r => res.json(r))
        .catch(err => res.status(400).json(err));
}
