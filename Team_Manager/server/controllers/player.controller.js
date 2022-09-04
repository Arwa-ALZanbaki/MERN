//  this file will house all of our logic for creating, retrieving, updating, and deleting ... CRUD

const Player = require("../models/player.model");

// - for the faker -
const { faker } = require("@faker-js/faker");
const fakerId = faker.datatype.uuid();

// --- function to get all players
module.exports.findAllPlayers = (req, res) => {
  // ...retrieve an array of all documents in the player collection
  Player.find({})
    .then(allDaPlayers => res.json(allDaPlayers))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// --- function to get a single player
module.exports.findOneSinglePlayer = (req, res) => {
  Player.findOne({ _id: req.params.id })
    .then(oneSinglePlayer => res.json({ player: oneSinglePlayer }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// // --- a function to get a random single player
// module.exports.findOneSingleRandomPlayer = (req, res) => {
//   let random = Math.floor(Math.random() * (Player.length))
//   // (Math.floor(Player.length/2))
// 	Player.findOne().skip(random) 
// 		.then(oneSinglePlayer => res.json({ player: oneSinglePlayer }))
// 		.catch(err => res.json({ message: "Oh no", error: err }));
// };

// --- function to create a player
module.exports.createNewPlayer = (req, res) => {
  Player.create(req.body)
    .then(newlyCreatedPlayer => res.json({ player: newlyCreatedPlayer }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// --- function to update a player
module.exports.updateExistingPlayer = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedPlayer => res.json({ player: updatedPlayer }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// ------------------------------
// findByIdAndUpdate(req.params.id, req.body, { new: true,runValidators:true}
// module.exports.updateExistingPlayerPartTow = (req, res) => {
//   Player.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators:true})
//     .then(updatedPlayer => res.json({ player: updatedPlayer }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
// ------------------------------

// --- function to delete a player
module.exports.deleteAnExistingPlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};



