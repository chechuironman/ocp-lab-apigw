// import { Courses } from '../../db/course_db.js';
// import { courses } from '../../db/course_db'
const express = require("express");
const router = express.Router();
var helpers = require( './helpers');
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
let middleware = require('../../middleware');
// const Courses = require('../../db/course_db.js');

router.get('/list_courses', middleware.checkToken,  async function (req, res) {  

    const response = await helpers.listCoursesManagement();
    console.log(response.data);
    res.send(response.data);
      
    });
router.post('/register',  middleware.checkToken, async function (req, res) {  
console.log("llega aqui");
    const response = await helpers.regiserCourse(req);
    console.log(response.data);
    res.send(response.data);
        
    });
module.exports = router;