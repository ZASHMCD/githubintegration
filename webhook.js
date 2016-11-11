"use strict";

module.exports = (app) => {
  console.log('Webhook is running ...');
  app.post('/webhook', (req, res) => {
    console.log('Activate Webhook');
    console.log(req.body);
    res.status(200).send();
  });
}
