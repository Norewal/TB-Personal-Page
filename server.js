//jshint esversion: 6

const express = require('express');
const path = require('path');
const cors = require('cors');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config({ path: __dirname + '/variables.env' });

const app = express();
app.use(cors());

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;

const mailchimp = new Mailchimp(mc_api_key);


// API endpoint
app.get('/api/memberAdd', (req, res) => {
  mailchimp
    .post(`/lists/${list_id}/members/`, {
      email_address: req.query.email,
      status: 'subscribed',
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});


const port = process.env.PORT || 9001;
app.listen(port);

console.log(`Express listening on port ${port}`);
