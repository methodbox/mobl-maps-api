import * as express from 'express';
import { Express, Request, Response } from 'express-serve-static-core';
import * as queryString from 'querystring';
import fetch from 'node-fetch';

const app: Express = express();
const apiKey: string = '';

type QueryObj = {
  origin: string;
  destination: string;
  key: string;
  mode: string;
  language: string;
  region: string;
};

app.get(
  '/',
  (req: Request, res: Response): void => {
    const queryObj: QueryObj = {
      origin: req.query.origin,
      destination: req.query.destination,
      key: apiKey,
      mode: req.query.mode,
      language: req.query.language,
      region: req.query.region,
    };
    const stringQuery: string = queryString.stringify(queryObj);

    fetch(`https://maps.googleapis.com/maps/api/directions/json?${stringQuery}`)
      .then(mapRes => {
        return mapRes.json();
      })
      .then(
        (json: Response): Response => {
          return res.send(json);
        }
      )
      .catch((err: Error) => console.log(err));
  }
);

app.listen(5000);
