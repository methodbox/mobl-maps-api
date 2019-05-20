const express = require('express');
const fetch = require('node-fetch');
const queryString = require('querystring');
const app = express();
const apiKey = '';

app.get('/', (req, res) => {
  req.query.key = apiKey;
  const encodedQuery = queryString.encode(req.query);

  fetch(`https://maps.googleapis.com/maps/api/directions/json?${encodedQuery}${apiKey}`)
    .then(res => res.json())
    .then(json => {
      return res.send(json);
    });
});

app.listen(5000);
