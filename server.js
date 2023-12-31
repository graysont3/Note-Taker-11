const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = process.env.port || 3001;

const app = express();



app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App is listening at http://localhost:${PORT}`)
);