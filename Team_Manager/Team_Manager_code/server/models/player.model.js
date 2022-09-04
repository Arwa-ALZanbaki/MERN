const mongoose = require("mongoose");

// Create a Schema for player
// title, price and description
const PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: [2, "the name must be at least 2 characters long"]
	},
	position: {
		type: String,
	},
	games: {
		type: Array,
	},

}, { timestamps: true });

// create a constructor function for our model and store in variable 'Player'
const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;