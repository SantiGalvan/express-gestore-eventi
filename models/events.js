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

    // Funzione per generare l'id
    generateId() {
        const id = crypto.randomUUID();
        return id;
    }

    // Funzione per leggere il db
    static readDb() {
        const filePath = path.join(__dirname, '../database/db.json');
        const fileData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileData);
    }

    // Funzione per aggiungere nel db
    static addDb(item) {

        const filePath = path.join(__dirname, '../database/db.json');

        const events = this.readDb();
        events.push(item);

        fs.writeFileSync(filePath, JSON.stringify(events, null, 2), 'utf-8');

    }

    // Filtro per la ricerca tramite id
    static getEventId(id) {
        const events = this.readDb();
        return events.find(event => event.id === id);
    }

    // Filtro per la ricerca tramite titolo
    static getEventsTitle(title) {
        const events = this.readDb();

        const eventsTitle = events.reduce((arr, event) => {
            event.title === title && arr.push(event);
            return arr;
        }, []);

        return eventsTitle;
    }
}

module.exports = Event;