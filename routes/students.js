const studentRouter = require("express").Router();
const controller = require("../controllers/controllers");

studentRouter.get("/api/v1/get/students", controller.getStudent);
studentRouter.post("/api/v1/add/student" , controller.addStudent)
studentRouter.get("/api/v1/get/student/by/id/:id", controller.getStudentById);

module.exports = studentRouter;
