var helpers = require( './helpers');
const express = require("express");
const router = express.Router();
let middleware = require('../../middleware');



router.post("/create_user", middleware.checkToken, async (req, res,) =>{

  const response = await  helpers.create_user(req.body);
  res.send(response.data);
});


  module.exports = router;