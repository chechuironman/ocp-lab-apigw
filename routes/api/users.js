var helpers = require( './helpers');
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
let middleware = require('../../middleware');
const axios = require('axios').default;
const list_courses_service = require("../../config/keys").list_courses_service;
const login_service = require("../../config/keys").login_service;
// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");
// Load User model
// const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const response = await  helpers.registerUser(req.body);
  console.log(response.data);
res.send(response.data);
  });
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", async (req, res,) =>{

  const response = await  helpers.login(req.body);
    console.log(response.data);
  res.send(response.data);
});
 

router.get('/list_courses', middleware.checkToken, async function (req, res) {
  // router.get('/list_courses',  async function (req, res) {  
  const response = await helpers.listCourses();
  console.log(response.data);
  res.send(response.data);
    
  });
  


  module.exports = router;