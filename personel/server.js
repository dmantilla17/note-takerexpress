//Dependencies
const express = require("express");
const path = require("path");
const apiroutes = require("./apiroutes");
const htmlroutes = require("./htmlrouter");
//INITIALZATION
const app = express();
const PORT = 3001;

//MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(apiroutes);
app.use(htmlroutes);
//CLICK
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
