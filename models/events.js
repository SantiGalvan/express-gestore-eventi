const path = require("path");
const fs = require("fs");

class Event {

    constructor(title, description, date, maxSeats) {
        this.id = this.generateId();
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    generateId() {
        const id = crypto.randomUUID();
        return id;
    }

    static readDb() {
        const filePath = path.join(__dirname, '../database/db.json');
        const fileData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileData);
    }

    static addDb(item) {

        const filePath = path.join(__dirname, '../database/db.json');

        const events = this.readDb();
        events.push(item);

        fs.writeFileSync(filePath, JSON.stringify(events, null, 2), 'utf-8');

    }
}