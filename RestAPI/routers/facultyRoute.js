const express = require("express");
const { addFaculty, getCourseByInstructor, getInstructorByCourse, deleteFacult, deleteFaculty } = require("../controller/facultyController");

const router = express.Router();

router.post("/addFaculty",addFaculty);
router.get("/getByInstructor/:id",getCourseByInstructor);
router.get("/getByCourse/:id",getInstructorByCourse);
router.delete("/deleteFaculty",deleteFaculty);

module.exports= router;

