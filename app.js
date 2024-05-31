const express = require('express');
const app = express();
const path = require("path");
const notFound = require("./middlewares/notfound.js");
const globalErrors = require("./middlewares/errors.js");
const port = process.env.PORT || 3000;

// Router degli eventi
const eventsRouter = require("./routers/events.js");

// Rotta iniziale
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, './index.html');
    res.sendFile(filePath);
});

// Rotte degli eventi
app.use('/events', eventsRouter);

// Middleware degli errori
app.use(notFound);
app.use(globalErrors);

app.listen(port, () => {
    console.log(`Server avviato sulla porta http://localhost:${port}.`);
})