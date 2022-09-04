const PlayerController = require("../controllers/player.controller");

module.exports = app => {
  app.get("/api/players/", PlayerController.findAllPlayers);
  // app.get("/api/players/random", PlayerController.findOneSingleRandomPlayer); 
  app.get("/api/players/:id", PlayerController.findOneSinglePlayer);
  app.post("/api/players/new", PlayerController.createNewPlayer);
  // app.put("/api/players/update/tow/:id", PlayerController.updateExistingPlayerPartTow);
  app.put("/api/players/update/:id", PlayerController.updateExistingPlayer);
  app.delete("/api/players/delete/:id", PlayerController.deleteAnExistingPlayer);
};