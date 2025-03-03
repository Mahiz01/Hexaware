const express = require('express');
const { addInstructor, fetchInstructors } = require('../controller/instructorController');

const router = express.Router();

router.post("/addInstructor",addInstructor);
router.get("/getInstructor",fetchInstructors);

module.exports= router;