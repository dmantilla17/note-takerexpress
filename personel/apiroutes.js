//Routing dependencies
const database = require("../db/db.json");
const router = require("express").Router();
const fs = require("fs");
const uuid = "uuid";
//ROUTES
router.get("./personel/notes", (req, res) => {
  res.json(notes);
  return console.log("Success!");
});
//adding a new note to the page
router.post("./personel/notes", (req, res) => {
  //.addNote((note));
  let note = req.body;
  database.push(note);
  fs.writeFile("../db/db.json", JSON.stringify(database), (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("Notes Applied");
});
module.exports = router;
