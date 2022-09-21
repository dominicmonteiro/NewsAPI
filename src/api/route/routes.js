'use strict';

const controller = require('../controller/controller');
const bodyParser = require('body-parser');
const config = require('../../config/config');

module.exports = function(app) {

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(bodyParser.raw({ type: 'application/json' }));

  //bellow is the route for the news api
  app.route('/newsapi/:country/:language').get(controller.getNews);
  app.route('/newsapi').get(controller.getNews);
};