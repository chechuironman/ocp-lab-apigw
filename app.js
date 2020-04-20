const express = require('express');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const backend = require("./routes/api/backend");
const management = require("./routes/api/management");
const logger = require("./logger");
const format = require("./stringformat");
// const pino = require('pino');
// const expressPino = require('express-pino-logger');

// const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
// const expressLogger = expressPino({ logger });
function main () {
  let app = express(); 
  const port = process.env.PORT || 3000;
  var cors=require('cors');

  app.options('*', cors());
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  // app.use(expressLogger);
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(bodyParser.json());
  app.use("/api/users", users);
  app.use("/api/backend", backend);
  app.use("/api/management", management);

  
//   app.get('/api/management/courses', middleware.checkToken, handlers.index);
  app.listen(port, () => logger('0','server','Server running on port {0} for the API GATEWAY SERVICE'.format(port),'info'));
  // logger.info('Server running on port %d for the API GATEWAY SERVICE', port);
  // console.log(`API GATEWAY SERVICE`)
}

main();