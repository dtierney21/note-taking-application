const path = require('path');
const router = require('express').Router();

// GET Route for homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// GET Route for notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Wildcard route to direct users to the homepage
router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../public/index.html')));

module.exports = router;
