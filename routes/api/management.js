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
router.get('/list_clusters', middleware.checkToken,  async function (req, res) {  

    const response = await helpers.listClustersManagement();
    console.log(response.data);
    res.send(response.data);
        
    });
router.post('/register',  middleware.checkToken, async function (req, res) {  
    const course = {
        courseName: req.body.courseName,
        courseID: req.body.courseID,
        github: req.body.github,
        expireDate: req.body.expireDate,
        owner: req.body.owner,
        cluster: req.body.selectedItem.id
      };
      
      const course_ = JSON.stringify(course);
      
      console.log(course_);
    // console.log(req.body);
    const response = await helpers.regiserCourse(req);
    console.log(response.data);
    res.send(response.data);
        
    });
module.exports = router;