"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// node modules
const path = require("path");
/* add other modules here */
const express = require("express");
const request = require("request-promise-native");
/* variables */
const app = express();
const port = process.env.PORT || 5000;
let testVariable = 'bob';
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname + '/public')));
/* run as static -comment this out, make form action /submit instead of '/'*/
app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get('/contact', (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname + '/public/contact.html'));
});
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
app.post('/submit', (req, res) => {
    console.log(req.body);
    const requestOptions = {
        /**
         * @requestOptions
         * method: some method (POST, GET, etc.),
         * uri: 'request uri',
         * form: {
         *   some json describing form data
         * },
         * json: true //  specify response type
         */
        method: 'POST',
        form: {
            secret: 'googleApiKey',
        },
        json: true,
        url: '',
    };
    request(requestOptions)
        .then(res => {
        return res.success;
    })
        .then(success => {
        if (!success) {
            res.json({ success: false, error: 'some err...' });
        }
        else if (success) {
            //  successful api request
        }
    });
});
//# sourceMappingURL=app.js.map