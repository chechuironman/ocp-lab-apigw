// import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "../../actions/types";
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
        console.log(list_courses_service);
        return new Promise((resolve, reject) => {
            // const url = list_courses_service;
            axios.get(list_courses_service).then(response => resolve(response));
          });

    },
    listClustersManagement: function (){
        console.log(list_clusters_service);
        return new Promise((resolve, reject) => {
            // const url = list_courses_service;
            axios.get(list_clusters_service).then(response => resolve(response));
          });

    },
    login: function(userData){
        console.log(login_service);
        console.log(userData);
        return new Promise((resolve, reject) => {
            // const url = login_service;
            axios.post(login_service, userData).then(response => resolve(response));
          });          
    },
    create_user: function(userData){
        return new Promise((resolve, reject) => {
            // const url = create_user_service;
            axios.post(create_user_service, userData).then(response => resolve(response));
          });          
    },
    listCoursesManagement: function(){
        return new Promise((resolve, reject) => {
            // const url = list_course_management_service;
            axios.get(list_course_management_service).then(response => resolve(response));
          });          
    },
    regiserCourse: function(course){
        console.log(register_course_service);
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
                //   transformRequest: [(data, headers) => {
                //     // transform the data
                
                //     return data;
                //   }]
              };
              let data = JSON.stringify({
                courseName: course.body.courseName,
                courseID: course.body.courseID,
                github: course.body.github,
                expireDate: course.body.expireDate,
                owner: course.body.owner,
                cluster: course.body.selectedItem.id
              });
              console.log("JSON");
            console.log(data);
            axios.post(register_course_service, data, {
                headers: {
                    'Content-Type': 'application/json'
                    }}
            
            )
          });          
    },
    registerUser: function(course){
        console.log(course);
        return new Promise((resolve, reject) => {
            // const url = list_course_management_service;
            axios.post(register_user_service,course).then(response => resolve(response));
          });          
    }

   
}
// export const listCourses = () => dispatch => {
// return new Promise((resolve, reject) => {
//         const url = list_courses_service;
//         axios.get(url).then(response => resolve(response));
//       });
// };

