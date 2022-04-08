var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("this works");
});

app.listen(8081, () => {
    console.log("listening!");
});
