const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events.js");

// Index
router.get("/", eventsController.index);
// Store
router.post("/", eventsController.store);
// Update
router.put("/:event", eventsController.update);

module.exports = router;