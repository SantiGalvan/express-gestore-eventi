const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => { });
// Store
router.post("/", (req, res) => { });
// Update
router.put("/:event", (req, res) => { });

module.exports = router;