var express = require("express");
var app = express();
var port = 8000;

app.get("/test", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
