 const notes = require('express').Router();
 const uuid = require('uuid');
 const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


 notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
 );

 notes.post('/', (req, res) => {
    const { noteTitle, noteText } = req.body;

    if (noteTitle && noteText ) {
        const newNote = {
            newTitle,
            newText,
            id: uuid(),
        };

        readAndAppend(newNotes, './db/db.json');

        const data = {
            status: 'success',
            body: newNote,
        };

        res.json(data);
    } else {
        res.json('Error! Could not post Note!')
    }
 });

 module.exports = notes; 