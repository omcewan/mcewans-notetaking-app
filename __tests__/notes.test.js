const fs = require("fs");
const { runMain } = require("module");
const {
  createNewNote,
  validateNote,
  deleteExistingNote,
} = require("../lib/notes");

jest.mock("fs");

test("creates a new note object", () => {
  const note = { title: "Test", text: "I am a test", id: "hhaogj23135" };

  expect(note.title).toBe("Test");
  expect(note.text).toBe("I am a test");
  expect(note.id).toBe("hhaogj23135");
});

test("delete an existing note", () => {
  const note = [
    { title: "Test", text: "I am a test", id: "hhaogj23135" },
    { title: "Test Two", text: "I am a test, two", id: "hhgnehg23135" },
  ];

  const updatedNote = deleteExistingNote("hhaogj23135", note);
  expect(updatedNote.length).toBe(1);
});

test("validate note", () => {
  const note = [
    { title: "Test", text: "I am a test", id: "hhaogj23135" },
    { title: "Test Two", text: "I am a test, two", id: "hhgnehg23135" },
  ];

  const result = validateNote(note[0]);
  expect(result).toBe(true);
});
