const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");

const router = express.Router();

// --------------- API REST CRUD

router.get    ("/directivos",      cors(), controller.readdirectivos);   // Read All
router.get    ("/directivos/:id",  cors(), controller.readDirectivo);    // Read
router.delete ("/directivos/:id",  cors(), controller.deleteDirectivo);  // Delete
router.put    ("/directivos/:id",  cors(), controller.updateDirectivo);  // Update
router.post   ("/directivos",      cors(), controller.createDirectivo);  // Create

router.get    ("/jugadores",     cors(), controller.readjugadores);  // Read All
router.get    ("/jugadores/:id", cors(), controller.readJugador);   // Read
router.delete ("/jugadores/:id", cors(), controller.deleteJugador); // Delete
router.put    ("/jugadores/:id", cors(), controller.updateJugador); // Update
router.post   ("/jugadores",     cors(), controller.createJugador); // Create

module.exports = router;