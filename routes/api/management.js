const express = require("express");
const router = express.Router();
var helpers = require( './helpers');
let middleware = require('../../middleware');
const logger = require("../../logger");
const format = require("../../stringformat");
// const pino = require('pino');
// const expressPino = require('express-pino-logger');

// const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

router.get('/list_courses', middleware.checkToken,  async function (req, res) {  
  logger(req.headers['authorization'],req.decoded['name'],"management/list_courses","info")  

    const response = await helpers.listCoursesManagement();
    res.send(response.data);
      
    });
router.get('/list_clusters', middleware.checkToken,  async function (req, res) {  
  logger(req.headers['authorization'],req.decoded['name'],"management/list_clusters","info")  
  // console.log(req.headers['authorization'])
    const response = await helpers.listClustersManagement(req.headers['authorization'],req.decoded['name']);
    res.send(response.data);
        
    });
router.post('/register',  middleware.checkToken, async function (req, res) {  
  logger(req.headers['authorization'],req.decoded['name'],"management/register","info")  
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