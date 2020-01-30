const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Oiee!");
});

module.exports = app

app.listen(3000, () => {
    console.log("Servidor funcionando em http://localhost:3000!");
});



