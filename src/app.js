var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("public/index.html", {root: __dirname});
});

app.listen(8081, () => {
    console.log("listening!");
});
