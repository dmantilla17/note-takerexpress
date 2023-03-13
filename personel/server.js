//Dependencies
const express = require("express");
const path = require("path");
//INITIALZATION
const app = express();
const PORT = 3001;

//MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
//CLICK
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
