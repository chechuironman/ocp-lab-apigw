var helpers = require( './helpers');
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
let middleware = require('../../middleware');
const axios = require('axios').default;



router.post("/create_user", middleware.checkToken, async (req, res,) =>{
  console.log("llego");

  const response = await  helpers.create_user(req.body);
    console.log(response.data);
  res.send(response.data);
});


  module.exports = router;