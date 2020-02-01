const express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('./config/keys');
let middleware = require('./middleware');
const users = require("./routes/api/users");
const backend = require("./routes/api/backend");
const management = require("./routes/api/management");

function main () {
  let app = express(); 
  const port = process.env.PORT || 3000;
  var cors=require('cors');

app.use(cors({origin:true,credentials: true}));
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
  app.use(bodyParser.json());
  app.use("/api/users", users);
  app.use("/api/backend", backend);
  app.use("/api/management", management);

  
//   app.get('/api/management/courses', middleware.checkToken, handlers.index);
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  console.log(`API GATEWAY SERVICE`)
}

main();