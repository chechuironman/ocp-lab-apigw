module.exports = {
    login_service: "http://host.docker.internal:3001/api/users/login",
    create_user_service: "http://host.docker.internal:8081/create_user",
    register_user_service: "http://localhost:3001/api/users/register",
    list_course_management_service: "http://host.docker.internal:3002/api/management/list_courses",
    register_course_service: "http://host.docker.internal:3002/api/management/register_course",
    list_courses_service: "http://host.docker.internal:3003/api/users/list_courses",
    register_user_service: "http://host.docker.internal:3001/api/users/register",
    secret: "secret"
  };