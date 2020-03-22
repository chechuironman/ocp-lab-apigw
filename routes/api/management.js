const express = require("express");
const router = express.Router();
var helpers = require( './helpers');
let middleware = require('../../middleware');
const pino = require('pino');
const expressPino = require('express-pino-logger');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

router.get('/list_courses', middleware.checkToken,  async function (req, res) {  
    // token = middleware.checkToken;
    //   logger.info('user %s',res)
    const response = await helpers.listCoursesManagement();
    res.send(response.data);
      
    });
router.get('/list_clusters', middleware.checkToken,  async function (req, res) {  

    const response = await helpers.listClustersManagement();
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
    //   token = middleware.checkToken;
    //   logger.info('user %s',token)
      const course_ = JSON.stringify(course);
    const response = await helpers.regiserCourse(req);
    res.send(response.data);
    });
module.exports = router;