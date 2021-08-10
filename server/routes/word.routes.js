const WordController = require("../controllers/word.controller");

module.exports = app => {
  app.get("/words/", WordController.findAll);
  app.get("/words/:id", WordController.findById);
  app.put("/words/update/:id", WordController.update);
  app.post("/words/new", WordController.create);
  app.delete("/words/delete/:id", WordController.delete);
};