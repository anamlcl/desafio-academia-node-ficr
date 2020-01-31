const express = require("express");
const router = require('./routes');

class APP {
    constructor () {
        this.express = express()
        this.routes()
    }
    routes () {
        this.express.use(router)
    }
};

module.exports = new APP().express

