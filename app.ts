import * as express from 'express';
import fetch from 'node-fetch';
import * as queryString from 'querystring';
const app = express();
const apiKey = '';

app.get('/', (req, res) => {
  req.query.key = apiKey;
  const stringQuery = queryString.stringify(req.query);

  console.log(stringQuery);

  fetch(`https://maps.googleapis.com/maps/api/directions/json?${stringQuery}${apiKey}`)
    .then(res => res.json())
    .then(json => {
      return res.send(json);
    });
});

app.listen(5000);
