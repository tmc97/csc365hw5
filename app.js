"use strict";

const express = require("express");
const hoffman = require("hoffman");
const path = require("path");
const bodyParser = require("body-parser");

const app = express(); //express module returns a function, not an object!
app.set("views", path.join(__dirname, "views")); // path to your templates
app.set("view engine", "dust");
app.engine("dust", hoffman.__express());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function (request, response) {
    response.render("index", {});
});

app.use("/assets", express.static("assets"));

app.listen(3000, function () {
    console.log("My app is listening on port 3000!");
});