// import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "../../actions/types";
const axios = require('axios').default;
const list_courses_service = require("../../config/keys").list_courses_service;
const login_service = require("../../config/keys").login_service;
const create_user_service = require("../../config/keys").create_user_service;
const list_course_management_service = require("../../config/keys").list_course_management_service;
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
    login: function(userData){
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
        return new Promise((resolve, reject) => {
            // const url = list_course_management_service;
            axios.post(register_course_service,course.body).then(response => resolve(response));
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

