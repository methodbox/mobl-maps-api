import * as express from 'express';
import bodyParser = require('body-parser');
import url = require('url');
import querystring = require('querystring');
const Article = require('./models').Article;

app.get('/', (req, res) => {
  console.log(req.query);
});

app.listen(8080);
