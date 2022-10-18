const router = require('express').Router();
const notes = require('../../db/db');
const fs = require('fs');

// retrieve exisitng notes from db
router.get('/notes', (req, res) => {
    const results = notes;
    res.json(results);
});

// Cretae a new note and add it to the exiting array of notes in the db.json file
router.post('/notes', (req, res) => {
    // Use fs to the db.json file
    fs.readFile('db/db.json', (err, data) => {
        let notes = JSON.parse(data);
        // get the note data from the request
        const note = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv1(),
        };
        console.log(note);
        res.json(note);

        // Add data to the notes file
        notes.push(note);
        console.log(notes);

        // Write the new array to the db.json file
        fs.writeFile('db/db.json', JSON.stringify(notes, null, 2));
    });
});

module.exports = router;
