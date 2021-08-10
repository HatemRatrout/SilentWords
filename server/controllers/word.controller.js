const Words = require("../models/word.model");
const { json } = require("express");


module.exports.findAll = (req, res)=>{
  Words.find({})
        .then(words => res.json(words))
        .catch(err => res.json(err));
}

module.exports.findById =(req, res)=>{
  Words.findOne({_id: req.params.id})
        .then(word=> res.json(word))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) =>{
    const {name, position} = req.body;
    Words.create({name, position})
        .then(word => res.json(word))
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
