"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const queryString = require("querystring");
const node_fetch_1 = require("node-fetch");
const app = express();
const apiKey = '';
app.get('/', (req, res) => {
	const queryObj = {
		origin: req.query.origin,
		destination: req.query.destination,
		key: apiKey,
		mode: req.query.mode,
		language: req.query.language,
		region: req.query.region,
	};
	const stringQuery = queryString.stringify(queryObj);
	node_fetch_1.default(`https://maps.googleapis.com/maps/api/directions/json?${stringQuery}`)
		.then(mapRes => mapRes.json())
		.then(json => {
			return res.send(json);
		})
		.catch(err => console.log(err));
});
app.listen(5000);
//# sourceMappingURL=app.js.map