const router = require('express').Router();
const notes = require('../../db/db');

// retrieve exisitng notes from db
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});
