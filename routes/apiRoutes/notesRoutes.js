const router = require('express').Router();
const { createNote, validateNotes } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {

  req.body.id = notes.length.toString();
  
  if (!validateNotes(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
