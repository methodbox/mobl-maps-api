import * as express from 'express';
import { Express, Request, Response } from 'express-serve-static-core';
import * as queryString from 'querystring';
import fetch from 'node-fetch';

const app: Express = express();
const apiKey: string = '';

app.get(
  '/',
  (req: Request, res: Response): void => {
    const stringQuery: string = queryString.stringify(req.query);
    fetch(`https://maps.googleapis.com/maps/api/directions/json?${stringQuery}${apiKey}`)
      .then(mapRes => mapRes.json())
      .then(json => {
        return res.send(json);
      })
      .catch(err => console.log(err));
  }
);

app.listen(5000);
