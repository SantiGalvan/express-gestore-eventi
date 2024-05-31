const path = require("path");
const fs = require("fs");

class Event {
    #id

    constructor(title, description, date, maxSeats) {
        this.#id = this.generateId();
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
        const eventId = events.find(event => event.id === id);

        if (!eventId) throw new Error(`L\'evento con id: ${id} non esiste`);

        return eventId;
    }

    // Filtro per la ricerca tramite titolo
    static getEventsTitle(title) {
        const events = this.readDb();

        const eventsTitle = events.reduce((arr, event) => {
            event.title === title && arr.push(event);
            return arr;
        }, []);

        if (eventsTitle.length < 1) throw new Error(`Non esistono eventi con nome: ${title}`);

        return eventsTitle;
    }

    // Recupero gli eventi associati
    static getReservations(title) {
        const events = this.readDb();

        const eventsTitle = events.reduce((arr, event) => {
            event.title === title && arr.push(event);
            return arr;
        }, []);

        const filePath = path.join(__dirname, '../database/reservations.json');
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const reservations = JSON.parse(fileData);

        const eventId = eventsTitle.map(e => e.id);
        const reservationsEvents = reservations.reduce((arr, res) => {
            eventId.includes(res.eventId) && arr.push(res);
            return arr;
        }, []);

        return reservationsEvents;
    }

    // Setter del title
    set title(title) {
        if (!title || title.length < 1 || typeof title !== 'string') throw new Error('Il titolo passato non può essere salvato');
        this.title = title;
    }

    // Setter della description
    set description(description) {
        if (!description || description.length < 10 || typeof description !== 'string') throw new Error('La descrizione non è stata accettata');
        this.description = description;
    }

    // Setter della date
    set date(date) {
        if (!date || description.length < 8) throw new Error('Data non valida');
        this.date = date;
    }
}

module.exports = Event;