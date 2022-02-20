const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArr) {
  const note = body;
  notesArr.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArr, null, 2)
  );
  return note;
}

function deleteExistingNote(noteID, notesArr) {
  const id = noteID;
  let noteIndex;
  notesArr.filter((note, index) => {
    if (note.id == id) {
      noteIndex = index;
    }
  });

  notesArr.splice(noteIndex, 1);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArr, null, 2)
  );
  return notesArr;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== "string" || note.title === "") {
    return false;
  }
  if (!note.text || typeof note.text !== "string" || note.text === "") {
    return false;
  }
  return true;
}

module.exports = { createNewNote, validateNote, deleteExistingNote };
