class Reservation {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = this.generateId();
        this.eventId = 2;
    }

    // Funzione per generare l'id
    generateId() {
        const id = crypto.randomUUID();
        return id;
    }

    // Setter del firstName
    set firstName(firstName) {
        if (!firstName || firstName.length < 1 || typeof firstName !== 'string') throw new Error('Nome non inserito correttamente');
        this.firstName = firstName;
    }
}