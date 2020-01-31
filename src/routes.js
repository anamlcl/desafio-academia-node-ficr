const { Router } = require('express')
const app = Router()
    app.get("/api/curriculo", (req, res, next) => {
        res.send("Funfou")
    });
    app.get("/*", (req, res, next) => {
        res.status(404).send("ERROR 404")
    });

module.exports = app;


