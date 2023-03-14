//Routing dependencies
const { Router } = require("express");
const path = require("path");
const router = require("express").Router();
//ROUTES
router.get("/notes", (req, res) => {
  res.json(notes);
  return console.log("Success!");
});
//COLLECTING THE NOTES FROM THE ROUTER AND BEING ABLE TO GO THROUGH THEM
router.get("/notes", (req, res) => {
  let note;
  for (let i = 0; i < notes.length; i++) {
    if (req.params.id === notes[i].id) {
      note = notes[i];
      res.json(note);
      return console.log("Notes applied");
    }
  }
});
//adding a new note to the page
router.post("/notes", (req, res) => {
  //.addNote((note));
  const title = req.body;
  const text = req.body;
  const newNote = {
    title,
    text,
  };
});
module.exports = router;
