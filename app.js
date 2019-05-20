"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const node_fetch_1 = require("node-fetch");
const queryString = require("querystring");
const app = express();
const apiKey = '';
app.get('/', (req, res) => {
    req.query.key = apiKey;
    const stringQuery = queryString.stringify(req.query);
    node_fetch_1.default(`https://maps.googleapis.com/maps/api/directions/json?${stringQuery}${apiKey}`)
        .then(res => res.json())
        .then(json => {
        return res.send(json);
    })
        .catch(err => console.log(err));
});
app.listen(5000);
//# sourceMappingURL=app.js.map