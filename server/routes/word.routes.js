const UserController = require("../controllers/word.controller");

module.exports = app => {
  app.get("/words/", UserController.findAllUsers);
  app.get("/words/:id", UserController.findOneSingleUser);
  app.put("/words/update/:id", UserController.updateExistingUser);
  app.post("/words/new", UserController.createNewUser);
  app.delete("/words/delete/:id", UserController.deleteAnExistingUser);
};