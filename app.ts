import * as express from 'express';
import { Express, Request, Response } from 'express-serve-static-core';
import fetch from 'node-fetch';
import * as queryString from 'querystring';
const app: Express = express();
const apiKey: string = '';

app.get(
  '/',
  (req: Request, res: Response): void => {
    req.query.key = apiKey;
    const stringQuery: string = queryString.stringify(req.query);

    fetch(`https://maps.googleapis.com/maps/api/directions/json?${stringQuery}${apiKey}`)
      .then(res => res.json())
      .then(json => {
        return res.send(json);
      })
      .catch(err => console.log(err));
  }
);

app.listen(5000);
