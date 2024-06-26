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

    // Setter del lastName
    set lastName(lastName) {
        if (!lastName || lastName.length < 1 || typeof lastName !== 'string') throw new Error('Cognome non inserito correttamente');
        this.lastName = lastName;
    }

    // Setter dell'email
    set email(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.match(regex)) throw new Error('Email non valida');
        this.email = email;
    }
}