const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, './index.html');
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`Server avviato sulla porta http://localhost:${port}.`);
})