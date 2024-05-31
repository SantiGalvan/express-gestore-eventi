const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events.js");

// Index
router.get("/", eventsController.index);
// Store
router.post("/", eventsController.store);
// Update
router.put("/:event", eventsController.update);

// Rotta index reservations
router.get("/:event/reservations", (req, res) => { });
// Rotta store reservations
router.post("/:event/reservations", (req, res) => { });
// Rotta destroy reservations
router.delete("/:event/reservations/:reservation", (req, res) => { });

module.exports = router;