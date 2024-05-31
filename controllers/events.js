// Classe Event
const eventModel = require("../models/event.js");

// Index
const index = (req, res) => {
    const { title, id } = req.query;
    let events;

    if (title) {
        events = eventModel.getEventsTitle(title);
    } else if (id) {
        events = eventModel.getEventId(id);
    } else {
        events = eventModel.readDb();
    }

    res.json(events);
};

// Store
const store = (req, res) => { };

// Update
const update = (req, res) => { };

module.exports = {
    index,
    store,
    update
}