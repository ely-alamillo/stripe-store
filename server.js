const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config();
const stripe = require('stripe')('sk_test_QSuOZ8Dn5wvjxbtPtyxMTsCS');

const corsOptions = {
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true // enable set cookie
};

const server = express();
// server options for receiving/sending data
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors(corsOptions));

// static server for build
server.use(express.static(path.join(__dirname, 'client/build')));

server.post('/api/checkout', (req, res) => {
  console.log('checkout starting...');
  const { token } = req.body;
  if (!token) return res.json({ err: 'Payment Failed' });
  stripe.charges.create(
    {
      amount: 999,
      currency: 'usd',
      description: 'Example charge',
      source: token
    },
    (err, charge) => {
      if (err) return res.json({ err: 'Payment Failed', error: err });
      res.send(charge);
    }
  );
});

server.listen(3021, () => {
  console.log('server running on port 3021');
});
