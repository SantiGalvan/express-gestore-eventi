const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events.js");
const reservationsController = require("../controllers/reservations.js");

// Index
router.get("/", eventsController.index);
// Store
router.post("/", eventsController.store);
// Update
router.put("/:event", eventsController.update);

// Rotta index reservations
router.get("/:event/reservations", reservationsController.index);
// Rotta store reservations
router.post("/:event/reservations", reservationsController.store);
// Rotta destroy reservations
router.delete("/:event/reservations/:reservation", reservationsController.destroy);

module.exports = router;