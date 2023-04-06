//DEPENDENCIES
const path = require("path");
const router = require("express").Router();
//ROUTES
//Links our html to servers
router.get("/", (req, res) => {
  console.log("Success");
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
router.get("./public/notes", (req, res) => {
  res.sendFile(path.join(__dirname, ""));
});

module.exports = router;
