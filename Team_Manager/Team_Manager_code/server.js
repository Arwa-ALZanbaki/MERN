// const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors') // This is new
const app = express();


app.use(cors()) // This is new

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the players routes function from our player.routes.js file
const AllMyPlayersRoutes = require("./server/routes/player.routes");
AllMyPlayersRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
