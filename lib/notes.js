const fs = require('fs');
const path = require('path');


function createNewNotes(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

function validateNotes(note) {
  // if (!note.title || typeof note.title !== 'string') {
  //   return false;
  // }
  // if (!note.text || typeof note.text !== 'string') {
  //   return false;
  // }
    return true;
}
module.exports = {
  createNewNotes,
  validateNotes

};