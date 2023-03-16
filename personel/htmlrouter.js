//DEPENDENCIES
const path = require("path");
const router = require("express").Router();
//ROUTES
//Links our html to servers
router.get("./public/index", (req, res) => {
  console.log("Succes");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("./public/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
