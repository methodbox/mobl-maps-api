import * as express from 'express';
import { Express, Request, Response } from 'express-serve-static-core';
import * as queryString from 'querystring';
import fetch from 'node-fetch';

const app: Express = express();
const apiKey: string = '';

app.get(
  '/',
  (req: Request, res: Response): void => {
    const queryObj = {
      origin: req.query.origin,
      destination: req.query.destination,
      key: apiKey,
      mode: req.query.mode,
      language: req.query.language,
      region: req.query.region,
    };
    const stringQuery: string = queryString.stringify(queryObj);

    fetch(`https://maps.googleapis.com/maps/api/directions/json?${stringQuery}`)
      .then(mapRes => mapRes.json())
      .then(json => {
        return res.send(json);
      })
      .catch(err => console.log(err));
  }
);

app.listen(5000);
