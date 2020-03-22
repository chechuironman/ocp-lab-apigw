const axios = require('axios').default;
const list_courses_service = require("../../config/keys").list_courses_service;
const login_service = require("../../config/keys").login_service;
const create_user_service = require("../../config/keys").create_user_service;
const list_course_management_service = require("../../config/keys").list_course_management_service;
const list_clusters_service = require("../../config/keys").list_clusters_service;
const register_course_service = require("../../config/keys").register_course_service;
const register_user_service = require("../../config/keys").register_user_service;
module.exports = {
    listCourses: function (){
        return new Promise((resolve, reject) => {
            axios.get(list_courses_service).then(response => resolve(response));
          });

    },
    listClustersManagement: function (){
        return new Promise((resolve, reject) => {
            axios.get(list_clusters_service).then(response => resolve(response));
          });

    },
    login: function(userData){
        return new Promise((resolve, reject) => {
            axios.post(login_service, userData)
            .then(response => resolve(response))
            .catch(response=> {
              resolve(response.response)})
          });          
    },
    create_user: function(userData){
        return new Promise((resolve, reject) => {
            axios.post(create_user_service, userData).then(response => resolve(response));
          });          
    },
    listCoursesManagement: function(){
        return new Promise((resolve, reject) => {
            axios.get(list_course_management_service).then(response => resolve(response));
          });          
    },
    regiserCourse: function(course){
        const course_ = {
            courseName: course.body.courseName,
            courseID: course.body.courseID,
            github: course.body.github,
            expireDate: course.body.expireDate,
            owner: course.body.owner,
            cluster: course.body.selectedItem.id
          };
        
        return new Promise((resolve, reject) => {
            let data2={
            courseName: course.body.courseName,
            courseID: course.body.courseID,
            github: course.body.github,
            expireDate: course.body.expireDate,
            owner: course.body.owner,
            cluster: course.body.selectedItem.id
          };
            const options = {
                method: 'post',
                url: register_course_service,
                data: {
                    courseName: course.body.courseName,
                    courseID: course.body.courseID,
                    github: course.body.github,
                    expireDate: course.body.expireDate,
                    owner: course.body.owner,
                    cluster: course.body.selectedItem.id
                  },
                  headers: {
                    'Content-Type': 'application/json'
                }
              };
              let data = JSON.stringify({
                courseName: course.body.courseName,
                courseID: course.body.courseID,
                github: course.body.github,
                expireDate: course.body.expireDate,
                owner: course.body.owner,
                cluster: course.body.selectedItem.id
              });
            axios.post(register_course_service, data, {
                headers: {
                    'Content-Type': 'application/json'
                    }}
            
            )
          });          
    },
    registerUser: function(User){
        return new Promise((resolve, reject) => {
            axios.post(register_user_service,User)
            .then(response => resolve(response))
            .catch(response=> {
              resolve(response.response)});
          });          
    }
    
   
}
