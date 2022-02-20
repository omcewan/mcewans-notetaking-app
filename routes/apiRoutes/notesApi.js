const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const {
  createNewNote,
  validateNote,
  deleteExistingNote,
} = require("../../lib/notes");

const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  req.body.id = uuidv4();

  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted!");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

router.delete("/notes/:id", (req, res) => {
  const noteID = req.params.id;
  const note = deleteExistingNote(noteID, notes);

  res.send(note);
});

module.exports = router;
