const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8080;
const routes = require('./src/api/route/routes');

const swagger = require('./src/api/swagger');

swagger(app);
routes(app);
app.get('*', function(req, res){
   res.status(404).send('Endpoint not found');
 });
app.listen(port, function() {
   console.log('NewsAPI rodando na porta: ' + port);
});

module.exports = app;