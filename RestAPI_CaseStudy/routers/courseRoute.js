
const express = require("express");
const { addCourse, fetchCourseById, deleteCourse, updateCourse, fetchAllCourse, deleteCourseNew, updateCourseNew } = require("../controller/courseController");

const router = express.Router();

router.post("/addCourse",addCourse);
router.get('/getAllCourses',fetchAllCourse);
router.get('/getById/:id',fetchCourseById);
router.delete('/deleteCourse/:id',deleteCourseNew);
router.put('/updateCourse/:id',updateCourseNew);

module.exports = router;