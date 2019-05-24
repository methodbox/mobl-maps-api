"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const queryString = require("querystring");
const node_fetch_1 = require("node-fetch");
const app = express();
app.get('/', (req, res) => {
    const apiKey = req.query.key;
    const stringQuery = queryString.stringify(req.query);
    node_fetch_1.default(`https://maps.googleapis.com/maps/api/directions/json?${stringQuery}${apiKey}`)
        .then(mapRes => mapRes.json())
        .then(json => {
        return res.send(json);
    })
        .catch(err => console.log(err));
});
app.listen(5000);
//# sourceMappingURL=app.js.map