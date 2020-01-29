const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Oiee!");
});

app.listen(3000, () => {
    console.log("Servidor funcionando em http://localhost:3000!");
});

