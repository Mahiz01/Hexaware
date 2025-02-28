const express= require("express");
const { addEnrollment, getEnrollment, getStudentsByCourseId, getCourseByStudentId, deleteByIds, getEnrollmentByDates } = require("../controller/enrollmentController");
const auth = require("../middleware/auth");
const router = express.Router();
router.post("/addEnrollment",addEnrollment);
router.get("/getEnrollments",auth,getEnrollment);
router.get("/getByCourseId/:id",getStudentsByCourseId);
router.get("/getByStudentId/:id",getCourseByStudentId);
router.delete("/deleteById/:student/:course",deleteByIds);
router.get("/getByDate",getEnrollmentByDates);


module.exports= router;