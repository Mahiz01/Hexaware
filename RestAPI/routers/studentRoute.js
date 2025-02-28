
const express = require("express");
const { addStudent, fetchAllStudent, fetchStudentById, deleteStudent, updateStudent, updateStudentNew } = require("../controller/studentController");
const auth = require("../middleware/auth");
// const { addCourse, fetchCourseById, deleteCourse, updateCourse, fetchAllCourse, deleteCourseNew, updateCourseNew } = require("../controller/courseController");

const router = express.Router();

router.post("/addStudent",auth,addStudent);
router.get('/getAllStudents',auth,fetchAllStudent);
router.get('/getById/:id',auth,fetchStudentById);
router.delete('/deleteStudent/:id',deleteStudent);
router.put('/updateStudent/:id',updateStudent);

module.exports = router;